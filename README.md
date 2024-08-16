# Examen Final - Aplicación de Gestión

## Descripción
Desarrollo de una aplicación web utilizando Next.js, con énfasis en la gestión de clientes y navegación entre diferentes secciones.

## Estructura del Menú
La aplicación incluye las siguientes opciones de navegación:
- Home
- Servicios
- Proyectos
- Clientes
- Blog
- Contacto

## Características Implementadas

### 1. Navegación
- Se ha creado un componente Navbar que incluye enlaces a todas las secciones requeridas.
- Cada opción del menú cambia de color al ser seleccionada, indicando la página actual.

### 2. Notificaciones
- Se implementó un sistema de notificaciones usando la librería 'sonner'.
- Todas las páginas (excepto Clientes) muestran un mensaje toast al ser visitadas, indicando la sección actual.

### 3. Gestión de Clientes
- Se desarrolló un CRUD completo para la gestión de clientes.
- Funcionalidades implementadas:
  - Crear nuevos clientes
  - Leer la lista de clientes
  - Actualizar información de clientes existentes
  - Eliminar clientes

### 4. Componentes Principales
- `Navbar`: Barra de navegación principal.
- `ClienteTable`: Tabla para mostrar la lista de clientes.
- `FormCliente`: Formulario para crear nuevos clientes.
- `FormUpdateCliente`: Formulario para actualizar información de clientes.

### 5. Validaciones
- Se utilizó Zod para la validación de datos en los formularios de clientes.

### 6. Estilización
- Se implementó un diseño responsivo utilizando Tailwind CSS y componentes de shadcn/ui.

## Tecnologías Utilizadas
- Next.js
- React
- TypeScript
- Prisma (para la gestión de la base de datos)
- Tailwind CSS
- shadcn/ui (para componentes de UI)
- Sonner (para notificaciones toast)
- Zod (para validaciones de esquemas)

## Consideraciones Adicionales
- La aplicación sigue las mejores prácticas de React y Next.js, utilizando componentes del lado del servidor y del cliente según sea necesario.
- Se implementó un manejo de errores básico en los formularios y acciones del servidor.

## Implementación
- Página inicio con el Navbar actualizado

![image](https://github.com/user-attachments/assets/a4771a31-c4b1-4160-91c9-8c9c46a9f3be)
![image](https://github.com/user-attachments/assets/5a81171a-e2c3-4821-857f-7acf2b079d3f)

- Mensaje de notificación de que página te encuentras

![image](https://github.com/user-attachments/assets/a5c5121f-f048-4bde-b92a-7de3ffa3b232)

- Lista de clientes

![image](https://github.com/user-attachments/assets/e3374133-e120-4329-addd-4b48fa25cb1f)

- Formulario de crear cliente

![image](https://github.com/user-attachments/assets/67c83066-2b8c-46e5-b894-ba19605729d9)

- Editar un cliente

![image](https://github.com/user-attachments/assets/a02e3259-0ea3-47a0-9a3c-8dccf9b5fce3)

- Eliminar cliente

![image](https://github.com/user-attachments/assets/950db982-b01e-4a53-af42-cf8b4dc23349)
