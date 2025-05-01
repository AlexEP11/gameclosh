# GameClosh - Next.js Project 🎮

Bienvenido a **GameClosh**, un proyecto desarrollado con Next.js. Aquí encontrarás los pasos necesarios para configurar y ejecutar el proyecto en tu entorno local.

## 📋 Requisitos previos

-   [Node.js](https://nodejs.org/) (v18 o superior recomendado)
-   [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/) (viene con Node.js)
-   [Git](https://git-scm.com/) (para clonar el repositorio)

## 🚀 Configuración inicial

### 1. Clonar El Repositorio

```bash
git clone https://github.com/AlexEP11/gameclosh.git
cd gameclosh
```

### 2. Instalar Dependencias

Usa npm o Yarn para instalar las dependencias:

```bash
npm install
# o
yarn install
```

### 3. Configurar Variables de Entorno

El proyecto usa [Supabase](https://supabase.com/) para manejar la autenticación y la base de datos, asi que es necesario configurar las keys para un correcto funcionamiento

-   Cambiar el `.env.template` a `.env.local`
-   Poner las llaves de acceso correctas

```markdown
# 📄 .env.local

NEXT_PUBLIC_SUPABASE_URL=<SUBSTITUTE_SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<SUBSTITUTE_SUPABASE_ANON_KEY>
```

### 4. Ejecutar el proyecto en modo de desarrollo

```bash
npm run dev
```

### 5. Ejecutar el proyecto en modo de producción

```bash
npm run build
npm run start
```
