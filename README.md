# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Sistema de Seguimiento de Mercancía

## Contexto de la Aplicación

En la gestión de envíos de mercancías, es fundamental contar con un sistema que permita realizar un seguimiento detallado de los pedidos. Este proyecto tiene como objetivo proporcionar una aplicación web que facilite la administración y el control de los envíos, permitiendo a un administrador registrar y gestionar pedidos asociados a clientes, ciudades de origen y destino, fechas de envío y entrega, valor, peso y una descripción detallada.

## Tecnologías Usadas

- **React** (con Vite) - Para la creación de la interfaz de usuario.
- **JSON Server** - Para simular una API REST y gestionar los datos de los pedidos.
- **CSS Puro** - Para el diseño y estilos de la aplicación.
- **Tailwind CSS o Bootstrap** - Para facilitar el estilizado y mejorar la apariencia de la interfaz.

## Modelo de Datos

El sistema manejará los datos de los pedidos en un JSON simulado con JSON Server. Un pedido tendrá la siguiente estructura:

```json
{
  "id": 1,
  "cliente": "Juan Pérez",
  "ciudad_origen": "Medellín",
  "ciudad_destino": "Bogotá",
  "fecha_envio": "2025-03-01",
  "fecha_entrega": "2025-03-05",
  "valor": 50000,
  "peso": 12.5,
  "descripcion": "Paquete con artículos de oficina"
}
```

## Estructura de Carpetas

El proyecto generado con Vite seguirá la siguiente estructura de carpetas:

```
📦 sistema-seguimiento-mercancia
├── 📂 node_modules       # Dependencias del proyecto
├── 📂 public             # Archivos estáticos y favicon
├── 📂 src                # Código fuente de la aplicación
│   ├── 📂 components     # Componentes reutilizables
│   ├── 📂 pages          # Páginas principales
│   ├── 📂 services       # Servicios para la comunicación con JSON Server
│   ├── 📂 styles         # Archivos de estilos globales
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada de la aplicación
├── 📂 server             # Datos simulados en JSON Server
│   ├── db.json          # Base de datos JSON
├── .gitignore           # Archivos ignorados por Git
├── index.html           # Archivo HTML principal
├── package.json         # Dependencias y scripts
├── vite.config.js       # Configuración de Vite
├── README.md            # Documentación del proyecto
```

## Instalación y Ejecución

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/tu_usuario/sistema-seguimiento-mercancia.git
   cd sistema-seguimiento-mercancia
   ```

2. Instalar las dependencias:

   ```sh
   npm install
   ```

3. Iniciar el servidor JSON:

   ```sh
   npm run json
   ```

4. Iniciar la aplicación React:

   ```sh
   npm run dev
   ```

5. Abrir en el navegador:

   La aplicación estará disponible en `http://localhost:5173` por defecto.

## Contribución

Si deseas contribuir al proyecto, puedes hacer un fork del repositorio, crear una rama con tus cambios y enviar un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

