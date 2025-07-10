# ☕ Node Coffee - REST API Server

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Un servidor REST completo desarrollado con Node.js, Express y MongoDB que implementa un sistema robusto de gestión de usuarios con autenticación JWT y autorización basada en roles.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Uso](#-uso)
- [API Endpoints](#-api-endpoints)
- [Estructura del Proyecto](#️-estructura-del-proyecto)
- [Modelo de Datos](#-modelo-de-datos)
- [Autenticación](#-autenticación)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## 🚀 Características

- **🔐 Autenticación JWT** - Sistema seguro de autenticación con tokens
- **👥 Gestión de Usuarios** - CRUD completo para usuarios
- **🛡️ Autorización por Roles** - Sistema de permisos (Admin, User, Seller)
- **🔒 Encriptación de Contraseñas** - Usando bcrypt para máxima seguridad
- **✅ Validación de Datos** - Validaciones robustas con express-validator
- **🌐 CORS Habilitado** - Configurado para desarrollo y producción
- **📁 Archivos Estáticos** - Servidor de archivos públicos
- **🏗️ Arquitectura MVC** - Código bien organizado y escalable

## 🛠️ Tecnologías

### Backend Core
- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js** - Framework web minimalista y flexible
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB

### Seguridad
- **bcrypt** - Hashing de contraseñas
- **jsonwebtoken** - Implementación de JWT
- **express-validator** - Validación y sanitización de datos

### Utilidades
- **cors** - Control de acceso entre orígenes
- **dotenv** - Gestión de variables de entorno

## 📦 Instalación

### Prerrequisitos
- Node.js (v14 o superior)
- MongoDB (local o Atlas)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/jeanc4rl02/node-coffee.git
   cd node-coffee
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   # Editar el archivo .env con tus configuraciones
   ```

4. **Iniciar el servidor**
   ```bash
   npm start
   ```

## ⚙️ Configuración

Crear un archivo `.env` en la raíz del proyecto:

```env
# Puerto del servidor
PORT=8080

# Base de datos
MONGODB_CNN=mongodb://localhost:27017/coffee_db
# O para MongoDB Atlas:
# MONGODB_CNN=mongodb+srv://username:password@cluster.mongodb.net/coffee_db

# JWT Secret
JWT_SECRET=tu_jwt_secret_aqui

# Entorno
NODE_ENV=development
```

## 🔧 Uso

### Desarrollo
```bash
npm start
```

### Producción
```bash
NODE_ENV=production npm start
```

El servidor estará disponible en `http://localhost:8080`

## 📡 API Endpoints

### 🔐 Autenticación

#### Login
```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Respuesta:**
```json
{
  "user": {
    "uid": "user_id",
    "name": "Usuario",
    "email": "user@example.com",
    "role": "USER_ROLE",
    "status": true
  },
  "token": "jwt_token_here"
}
```

### 👥 Usuarios

#### Obtener Usuarios
```http
GET /api/v1/users
Authorization: Bearer {token}
```

#### Crear Usuario
```http
POST /api/v1/users
Content-Type: application/json

{
  "name": "Nuevo Usuario",
  "email": "nuevo@example.com", 
  "password": "password123",
  "role": "USER_ROLE"
}
```

#### Actualizar Usuario
```http
PUT /api/v1/users/{id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Nombre Actualizado",
  "email": "actualizado@example.com"
}
```

#### Eliminar Usuario
```http
DELETE /api/v1/users/{id}
Authorization: Bearer {token}
```
*Requiere rol ADMIN_ROLE o SELLER_ROLE*

### 📋 Códigos de Respuesta

| Código | Descripción |
|--------|-------------|
| 200 | OK - Operación exitosa |
| 201 | Created - Recurso creado |
| 400 | Bad Request - Error en la solicitud |
| 401 | Unauthorized - Token inválido o faltante |
| 403 | Forbidden - Permisos insuficientes |
| 404 | Not Found - Recurso no encontrado |
| 500 | Internal Server Error - Error del servidor |

## 🏗️ Estructura del Proyecto

```
node-coffee/
├── 📄 app.js                 # Punto de entrada
├── 📁 controllers/           # Lógica de negocio
│   ├── auth.controller.js    # Controlador de autenticación
│   └── user.controller.js    # Controlador de usuarios
├── 📁 database/              # Configuración de BD
│   └── config.js             # Conexión a MongoDB
├── 📁 helpers/               # Funciones auxiliares
│   └── db-validators.js      # Validadores de BD
├── 📁 middlewares/           # Middlewares personalizados
│   ├── validate-fields.js    # Validación de campos
│   ├── validate-jwt.js       # Validación de JWT
│   └── validate-roles.js     # Validación de roles
├── 📁 models/                # Modelos de datos
│   ├── server.js             # Configuración del servidor
│   ├── user.models.js        # Modelo de usuario
│   └── role.models.js        # Modelo de roles
├── 📁 public/                # Archivos estáticos
├── 📁 routes/                # Definición de rutas
│   ├── auth.routes.js        # Rutas de autenticación
│   └── user.routes.js        # Rutas de usuarios
├── 📄 package.json           # Dependencias y scripts
└── 📄 README.md              # Documentación
```

## 💾 Modelo de Datos

### Usuario (User)
```javascript
{
  name: String,        // Nombre del usuario (min: 3 caracteres)
  email: String,       // Email único
  password: String,    // Contraseña encriptada (min: 6 caracteres)
  img: String,         // URL de imagen de perfil
  role: String,        // ADMIN_ROLE | USER_ROLE | SELLER_ROLE
  status: Boolean,     // true (activo) | false (inactivo)
  google: Boolean      // true si es cuenta de Google
}
```

### Rol (Role)
```javascript
{
  role: String         // Nombre del rol
}
```

## 🔒 Autenticación

### JWT (JSON Web Tokens)
- **Expiración**: Configurable en variables de entorno
- **Algoritmo**: HS256
- **Payload**: Contiene el ID del usuario

### Middleware de Autenticación
```javascript
// Validación de JWT
validateJWT

// Validación de roles específicos
hasRole('ADMIN_ROLE', 'SELLER_ROLE')

// Validación de campos
validateFields
```

### Roles y Permisos

| Rol | Permisos |
|-----|----------|
| **ADMIN_ROLE** | Acceso completo (CRUD usuarios) |
| **SELLER_ROLE** | Lectura y eliminación de usuarios |
| **USER_ROLE** | Solo lectura de su propia información |

## 🧪 Testing

```bash
# Ejecutar tests (cuando estén implementados)
npm test
```

## 🔍 Ejemplos de Uso

### Registrar un nuevo usuario
```bash
curl -X POST http://localhost:8080/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "password": "123456",
    "role": "USER_ROLE"
  }'
```

### Iniciar sesión
```bash
curl -X POST http://localhost:8080/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan@example.com",
    "password": "123456"
  }'
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

### Estándares de Código
- Usar ES6+ features
- Seguir las convenciones de nombres
- Documentar funciones complejas
- Incluir validaciones apropiadas

## 📝 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Jean Carlos Carrillo** - [@jeanc4rl02](https://github.com/jeanc4rl02)

---

⭐ ¡No olvides darle una estrella al proyecto si te fue útil!