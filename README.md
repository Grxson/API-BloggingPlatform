# 📝 API Blogging Platform

Una REST API creada con Node.js, Express y MongoDB que permite a los usuarios registrarse, iniciar sesión y gestionar publicaciones de blog. Incluye autenticación con JWT, validaciones, middleware personalizado y estructura escalable para producción.

## Link Del Proyecto

https://roadmap.sh/projects/blogging-platform-api

## 🚀 Características

- Registro e inicio de sesión de usuarios

- Autenticación con JWT

- Creación, lectura, actualización y eliminación de publicaciones (CRUD)

- Validaciones con Joi

- Middleware de errores y protección de rutas

- Arquitectura modular (controladores, rutas, middlewares, validaciones)

- MongoDB con Mongoose como base de datos

## 🧰 Tecnologías

- Node.js

- Express

- MongoDB + Mongoose

- JWT (jsonwebtoken)

- Joi (validaciones)

- Morgan (logs)

- dotenv

## Instalación

1. **Clonar el repositorio**:

```bash
git clone https://github.com/Grxson/API-BloggingPlatform.git

```

2. **Instalar dependencias**
   Navega al directorio del proyecto e instala las dependencias utilizando **npm** o **yarn**

```bash
cd API-BloggingPlatform
npm install
```

O si tienes **yarn**

```bash
yarn install
```

3. **Configurar las variables de entorno**
   Crea un archivo **.env** en la raíz del proyecto con los siguientes parámetros:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/<nombreBD>
JWT_SECRET=clavesecreta
JWT_EXPIRES_IN=1d
```

4. **Ejecutar la aplicación**

```bash
npm run server
```

## Endpoints

https://documenter.getpostman.com/view/32483566/2sB2cd4Hr7
