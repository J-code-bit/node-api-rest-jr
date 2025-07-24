### node-api-rest-jr

# API REST de Productos y Autenticación

## Descripción
##### Este proyecto implementa una API RESTful con Node.js y Express para la gestión de productos y la autenticación de usuarios. Utiliza Firebase Firestore para la persistencia de datos y JSON Web Tokens (JWT) para la seguridad de las rutas.


## Características
##### -*Gestión Completa de Productos*: Obtener, buscar por nombre, crear, actualizar, y eliminar productos.

##### -*Autenticación Segura:* Login de usuarios con credenciales y emisión de Bearer Tokens JWT.

##### -*Protección de Rutas:* Middleware de autenticación JWT para asegurar endpoints sensibles.

##### -*Persistencia en la Nube:* Integración con Google Firestore para el almacenamiento de datos.

##### -*Servidor Robusto:* Express con CORS, body-parser y manejo de rutas 404.

##### -*Configuración Flexible:* Uso de variables de entorno (.env).

##### -*Despliegue Sencillo:* Preparado para Vercel.


## Tecnologías Utilizadas
##### -*Node.js:* Entorno de ejecución JavaScript.

##### -*Express.js:* Framework web.

##### -*CORS:* Middleware para peticiones de origen cruzado.

##### -*Dotenv:* Carga de variables de entorno.

##### -*Firebase:* SDK para Firestore.

##### -*JSON Web Token (JWT):* Autenticación basada en tokens.


## Estructura del Proyecto
##### .
##### ├── .env                  # Variables de entorno
##### ├── .vercel                # Configuración de Vercel
##### │   └── project.json
##### ├── index.js              # Punto de entrada principal
##### ├── package.json          # Metadatos y dependencias
##### ├── vercel.json           # Configuración de despliegue en Vercel
##### └── src/
#####    ├── config/
#####    │   └── firebase.js   # Configuración de Firebase
#####    ├── controllers/
#####    │   ├── auth.controller.js
#####    │   └── products.controller.js
#####    ├── middlewares/
#####    │   └── auth.middleware.js # Middleware de autenticación JWT
#####    ├── models/
#####    │   ├── auth.model.js
#####    │   └── products.model.js
#####    ├── routes/
#####    │   ├── auth.routes.js
#####    │   └── products.routes.js
#####    └── services/
#####        ├── auth.service.js
#####        └── products.service.js


## Primeros Pasos
### Prerrequisitos
##### -*Node.js:* Versión 14 o superior.

##### -*npm:* Incluido con Node.js.

## Instalación
### 1.Clona el repositorio:
##### `git clone <URL_DEL_REPOSITORIO>`
##### `cd <NOMBRE_DEL_DIRECTORIO>`

### 2.Instala las dependencias:
##### `npm install`

## Configuración de Variables de Entorno
##### Crea un archivo .env en la raíz del proyecto con las siguientes variables:

```
##### PORT=3000 
##### FIREBASE_API_KEY="tu_api_key_de_firebase"
##### FIREBASE_AUTH_DOMAIN="tu_auth_domain_de_firebase"
##### FIREBASE_PROJECT_ID="tu_project_id_de_firebase"
##### FIREBASE_STORAGE_BUCKET="tu_storage_bucket_de_firebase"
##### FIREBASE_MESSAGING_SENDER_ID="tu_messaging_sender_id_de_firebase"
##### FIREBASE_APP_ID="tu_app_id_de_firebase"
##### FIREBASE_MEASUREMENT_ID="tu_measurement_id_de_firebase"
##### JWT_SECRET="una_clave_secreta_fuerte_para_jwt"
```
##### Nota: Consultar la sección Configuración de Firebase para obtener credenciales.

## Ejecución del Proyecto
##### Ejecutar en modo desarrollo:
##### `npm run dev`

## Documentación de la API

##### -GET /products
##### -Descripción: Devuelve la lista de todos los productos.

### Buscar productos por nombre
##### -GET /products/search?name=palabra
##### -Descripción: Devuelve los productos cuyo nombre contiene la palabra indicada.
##### -Parámetros:  name (query, requerido): texto a buscar en el nombre del producto.
##### Ejemplo de uso: `/products/search?name=camiseta`

### Obtener producto por ID
##### -GET /products/:id
##### -Descripción: Devuelve un producto específico por su ID.
##### -Parámetros: id (path, requerido): ID del producto.
##### Ejemplo de uso: `/products/1`

### Crear un producto
##### -POST /products
##### -Descripción: Crea un nuevo producto.

### Actualizar un producto (PUT)
##### -PUT /products/:id
##### -Descripción: Actualiza completamente un producto existente.
##### -Parámetros: id (path, requerido): ID de l producto a actualizar.

### Actualizar parcialmente un producto (PATCH)
##### PATCH /products/:id
##### Descripción: Actualiza parcialmente un producto existente.
##### Parámetros: id (path, requerido): ID del producto a actualizar.

### Eliminar un producto
##### -DELETE /products/:id
##### -Descripción: Elimina un producto por su ID.
##### -Parámetros: id (path, requerido): ID del producto a eliminar.
##### Respuesta: 204 No Content

## Códigos de estado
##### -200 - OK: Operación exitosa
##### -201 - Created: Recurso creado exitosamente
##### -204 - No Content: Recurso eliminado exitosamente
##### -400 - Bad Request: Datos de entrada inválidos
##### -404 - Not Found: Recurso no encontrado

## Autenticación JWT
##### Las rutas protegidas requieren un token JWT válido en el encabezado Authorization con el formato Bearer <token>.
##### Ejemplo de encabezado Authorization:
##### `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NSIsImlhdCI6MTY3O`

## Despliegue a Producción
##### Este proyecto está configurado para ser desplegado en Vercel. 

## Enlaces del proyecto:
### [Vercel]: (https://node-api-rest-jr.vercel.app) 
### [gitHub]: (https://github.com/J-code-bit/node-api-rest-jr.git)

