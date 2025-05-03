import { Countdown } from "../countdown/Countdown";

interface Props {
    successMessage: string | null;
    errorMessage: string | null;
    countdown?: boolean;
}

export const AuthMessage = ({
    successMessage,
    errorMessage,
    countdown = false,
}: Props) => {
    return (
        <>
            {successMessage && (
                <div className="mt-4 p-3 rounded-md bg-green-800 text-white">
                    {countdown ? (
                        <Countdown
                            countdown={5}
                            message={`${successMessage} - Redirigiendo al inicio `}
                            redirectTo="/"
                        />
                    ) : (
                        <p>{successMessage}</p>
                    )}
                </div>
            )}

            {errorMessage && (
                <div className="my-4 p-3 rounded-md bg-red-800 text-white">
                    <p>{errorMessage}</p>
                </div>
            )}
        </>
    );
};
