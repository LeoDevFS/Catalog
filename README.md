# Catálogo Digital de Lubricantes
## Actualmente desplegada en https://roysec.netlify.app/

Este es un proyecto de catálogo digital de lubricantes desarrollado para la empresa Royse. El proyecto incluye una aplicación cliente construida con React y Vite, y una aplicación servidor construida con Express y MongoDB. El objetivo es proporcionar una plataforma para gestionar y visualizar productos de lubricantes de manera eficiente.


## Instalación

### Cliente

1. Navega al directorio del cliente:

    ```bash
    cd client/catalog
    ```

2. Copia el archivo `.env.example` a `.env` y configura las variables de entorno:

    ```bash
    cp .env.example .env
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia la aplicación cliente:

    ```bash
    npm run dev
    ```

### Servidor

1. Navega al directorio del servidor:

    ```bash
    cd server
    ```

2. Copia el archivo `.env.example` a `.env` y configura las variables de entorno:

    ```bash
    cp .env.example .env
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia la aplicación servidor:

    ```bash
    npm start
    ```

## Variables de Entorno

## Servidor
Crea un archivo .env en el directorio server con el siguiente contenido:

MONGO_URI=tu_uri_de_mongodb
PORT= ****

## Uso

## Cliente
La aplicación cliente permite a los usuarios ver una lista de productos filtrados por SAE, marca y formato. Los usuarios también pueden crear nuevos productos a través de un formulario.

## Servidor
La aplicación servidor proporciona una API RESTful para gestionar los productos del catálogo. Las rutas disponibles son:

POST /create: Crear un nuevo producto.
GET /: Obtener todos los productos.
GET /id/:_id: Obtener un producto por su ID.
PUT /id/:_id: Actualizar un producto por su ID.
DELETE /id/:_id: Eliminar un producto por su ID.
Mejoras Futuras
Este proyecto está en constante evolución y se le irán implementando nuevas funcionalidades y mejoras. Algunas de las mejoras planificadas incluyen:

Modularización del código: Refactorizar el código para hacerlo más modular y mantenible.
Autenticación y autorización: Implementar un sistema de autenticación y autorización para gestionar el acceso a la aplicación.
Optimización del rendimiento: Mejorar el rendimiento de la aplicación tanto en el cliente como en el servidor.