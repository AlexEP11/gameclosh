"use server";

import { createClient } from "@/lib/supabase/server";
import { encodedRedirect } from "@/lib/utils/utils";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const username = formData.get("username")?.toString();

    const supabase = await createClient();
    const origin = (await headers()).get("origin");

    if (!email || !password || !username) {
        return encodedRedirect(
            "error",
            "/sign-up",
            "Se requieren correo, contraseña y nombre de usuario"
        );
    }

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${origin}/auth/callback`,
        },
    });

    if (error || !data.user) {
        console.error(error?.code + " " + error?.message);
        return encodedRedirect("error", "/sign-up", "Error: " + error?.message);
    }

    // Insertar el nombre de usuario en la tabla 'profiles'
    const { error: profileError } = await supabase.from("profiles").insert([
        {
            id: data.user.id,
            username: username,
        },
    ]);

    if (profileError) {
        console.error("Error creando perfil: ", profileError.message);
        return encodedRedirect(
            "error",
            "/sign-up",
            "Error al guardar nombre de usuario"
        );
    }

    if (username.length > 15) {
        return encodedRedirect(
            "error",
            "/sign-up",
            "El nombre de usuario debe tener máximo 15 caracteres"
        );
    }

    return encodedRedirect(
        "success",
        "/sign-up",
        "¡Registro exitoso! Por favor verifica tu correo electrónico"
    );
};

export const signInAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return encodedRedirect(
            "error",
            "/sign-in",
            "Error al iniciar sesión: " + error.message
        );
    }

    return encodedRedirect("success", "/sign-in", "Inicio de sesión exitoso");
};

export const forgotPasswordAction = async (formData: FormData) => {
    const email = formData.get("email")?.toString();
    const supabase = await createClient();
    const origin = (await headers()).get("origin");
    const callbackUrl = formData.get("callbackUrl")?.toString();

    if (!email) {
        return encodedRedirect(
            "error",
            "/forgot-password",
            "Se requiere un correo electrónico"
        );
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
    });

    if (error) {
        console.error(error.message);
        return encodedRedirect(
            "error",
            "/forgot-password",
            "No se pudo restablecer la contraseña: " + error.message
        );
    }

    if (callbackUrl) {
        return redirect(callbackUrl);
    }

    return encodedRedirect(
        "success",
        "/forgot-password",
        "Revisa tu correo electrónico para obtener el enlace de restablecimiento de contraseña"
    );
};

export const resetPasswordAction = async (formData: FormData) => {
    const supabase = await createClient();

    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!password || !confirmPassword) {
        return encodedRedirect(
            "error",
            "/protected/reset-password",
            "Se requieren tanto la contraseña como su confirmación"
        );
    }

    if (password !== confirmPassword) {
        return encodedRedirect(
            "error",
            "/protected/reset-password",
            "Las contraseñas no coinciden"
        );
    }

    const { error } = await supabase.auth.updateUser({
        password: password,
    });

    if (error) {
        return encodedRedirect(
            "error",
            "/protected/reset-password",
            "Error al actualizar la contraseña: " + error.message
        );
    }

    return encodedRedirect(
        "success",
        "/protected/reset-password",
        "Contraseña actualizada correctamente"
    );
};

export const signOutAction = async () => {
    const supabase = await createClient();
    await supabase.auth.signOut();
    return redirect("/");
};
