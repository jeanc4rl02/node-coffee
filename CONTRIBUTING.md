# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a Node Coffee! Esta guía te ayudará a entender cómo puedes participar en el desarrollo del proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Configuración del entorno de desarrollo](#configuración-del-entorno-de-desarrollo)
- [Proceso de contribución](#proceso-de-contribución)
- [Estándares de código](#estándares-de-código)
- [Estructura de commits](#estructura-de-commits)
- [Pull Requests](#pull-requests)
- [Issues](#issues)

## 📜 Código de Conducta

Al participar en este proyecto, te comprometes a mantener un ambiente respetuoso y colaborativo. Por favor:

- Sé respetuoso con otros colaboradores
- Acepta críticas constructivas
- Enfócate en lo que es mejor para la comunidad
- Muestra empatía hacia otros miembros de la comunidad

## 🚀 ¿Cómo puedo contribuir?

### Reportar Bugs
- Usa la plantilla de issue para bugs
- Incluye pasos para reproducir el problema
- Proporciona información del entorno (OS, Node.js version, etc.)

### Sugerir Funcionalidades
- Usa la plantilla de issue para features
- Explica claramente el problema que resuelve
- Proporciona ejemplos de uso

### Mejorar la Documentación
- Corregir errores tipográficos
- Mejorar explicaciones
- Agregar ejemplos de código
- Traducir documentación

### Contribuir con Código
- Implementar nuevas funcionalidades
- Corregir bugs
- Mejorar el rendimiento
- Agregar tests

## ⚙️ Configuración del entorno de desarrollo

### Prerrequisitos
- Node.js v14 o superior
- MongoDB (local o Atlas)
- Git

### Configuración

1. **Fork el repositorio**
   ```bash
   # Haz fork desde GitHub y luego clona tu fork
   git clone https://github.com/tu-usuario/node-coffee.git
   cd node-coffee
   ```

2. **Agregar el repositorio original como upstream**
   ```bash
   git remote add upstream https://github.com/jeanc4rl02/node-coffee.git
   ```

3. **Instalar dependencias**
   ```bash
   npm install
   ```

4. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   # Edita .env con tus configuraciones locales
   ```

5. **Verificar que todo funciona**
   ```bash
   npm start
   ```

## 🔄 Proceso de contribución

### 1. Crear una rama
```bash
# Sincronizar con upstream
git fetch upstream
git checkout main
git merge upstream/main

# Crear nueva rama
git checkout -b feature/nueva-funcionalidad
# o
git checkout -b fix/correccion-bug
```

### 2. Hacer cambios
- Implementa tu funcionalidad o corrección
- Sigue los estándares de código
- Agrega tests si es necesario
- Actualiza la documentación

### 3. Probar cambios
```bash
# Ejecutar tests (cuando estén implementados)
npm test

# Verificar que el servidor inicia correctamente
npm start
```

### 4. Commit y push
```bash
git add .
git commit -m "tipo: descripción del cambio"
git push origin feature/nueva-funcionalidad
```

### 5. Crear Pull Request
- Ve a GitHub y crea un Pull Request
- Usa la plantilla proporcionada
- Asigna reviewers si es necesario

## 📝 Estándares de código

### JavaScript
- Usar ES6+ features cuando sea posible
- Usar `const` y `let` en lugar de `var`
- Usar arrow functions cuando sea apropiado
- Usar template literals para strings complejos

### Nomenclatura
- **Variables y funciones**: camelCase
- **Constantes**: UPPER_SNAKE_CASE
- **Archivos**: kebab-case
- **Clases**: PascalCase

### Estructura de archivos
```javascript
// Ejemplo de estructura de controlador
const { response } = require('express');
const Model = require('../models/model');

const getItems = async (req, res = response) => {
  try {
    // Lógica del controlador
    res.json({
      items
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error interno del servidor'
    });
  }
};

module.exports = {
  getItems
};
```

### Validaciones
- Usar express-validator para validación de entrada
- Implementar validaciones personalizadas en helpers
- Manejar errores apropiadamente

### Middlewares
- Crear middlewares reutilizables
- Documentar el propósito de cada middleware
- Manejar errores adecuadamente

## 📝 Estructura de commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial limpio:

```
tipo(ámbito): descripción

[cuerpo opcional]

[pie opcional]
```

### Tipos de commit
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan la lógica)
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplos
```bash
feat(auth): agregar autenticación con Google
fix(users): corregir validación de email duplicado
docs(readme): actualizar guía de instalación
refactor(controllers): extraer lógica común a helpers
```

## 🔍 Pull Requests

### Checklist antes de crear PR
- [ ] El código compila sin errores
- [ ] Los tests pasan (cuando estén implementados)
- [ ] La documentación está actualizada
- [ ] El código sigue los estándares establecidos
- [ ] Se agregaron tests para nueva funcionalidad
- [ ] Se probó manualmente la funcionalidad

### Plantilla de PR
```markdown
## Descripción
Breve descripción de los cambios realizados.

## Tipo de cambio
- [ ] Bug fix (cambio que corrige un problema)
- [ ] Nueva funcionalidad (cambio que agrega funcionalidad)
- [ ] Breaking change (cambio que rompe funcionalidad existente)
- [ ] Documentación

## ¿Cómo se ha probado?
Describe las pruebas realizadas para verificar los cambios.

## Checklist
- [ ] Mi código sigue los estándares del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado mi código en áreas difíciles de entender
- [ ] He realizado cambios correspondientes en la documentación
- [ ] Mis cambios no generan nuevas advertencias
```

## 🐛 Issues

### Plantilla para bugs
```markdown
**Describe el bug**
Descripción clara y concisa del problema.

**Para reproducir**
Pasos para reproducir el comportamiento:
1. Ve a '...'
2. Haz clic en '....'
3. Desplázate hacia '....'
4. Ve el error

**Comportamiento esperado**
Descripción clara de lo que esperabas que pasara.

**Screenshots**
Si aplica, agrega screenshots para ayudar a explicar el problema.

**Información del entorno:**
- OS: [e.g. iOS]
- Node.js: [e.g. v16.14.0]
- Versión del proyecto: [e.g. 1.0.0]

**Contexto adicional**
Agrega cualquier otro contexto sobre el problema aquí.
```

### Plantilla para funcionalidades
```markdown
**¿Esta feature request está relacionada con un problema?**
Descripción clara y concisa del problema. Ej. Me frustra cuando [...]

**Describe la solución que te gustaría**
Descripción clara y concisa de lo que quieres que pase.

**Describe alternativas que has considerado**
Descripción clara y concisa de cualquier solución o funcionalidad alternativa que hayas considerado.

**Contexto adicional**
Agrega cualquier otro contexto o screenshots sobre la feature request aquí.
```

## 🎯 Áreas donde necesitamos ayuda

- **Tests unitarios e integración**
- **Documentación de API con Swagger**
- **Implementación de rate limiting**
- **Logs estructurados**
- **Métricas y monitoreo**
- **Validaciones avanzadas**
- **Autenticación OAuth**

## 📞 ¿Necesitas ayuda?

Si tienes preguntas o necesitas ayuda:

1. Revisa la documentación existente
2. Busca en issues cerrados por problemas similares
3. Crea un nuevo issue con la etiqueta "question"
4. Contacta a los maintainers

## 🙏 Reconocimientos

Agradecemos a todos los colaboradores que han contribuido a este proyecto. Tu tiempo y esfuerzo son muy valorados.

---

¡Gracias por contribuir a Node Coffee! ☕