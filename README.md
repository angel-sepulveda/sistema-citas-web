# 🗓️ Sistema de Citas Web

¡Bienvenido al repositorio del **Sistema de Citas Web**! Esta aplicación está diseñada para gestionar la programación de citas y reservas de manera dinámica, eficiente y segura a través de un entorno web.

---

## 🚀 Características del Proyecto
* **Gestión Dinámica de Citas:** Permite agendar, actualizar y cancelar citas en tiempo real.
* **Arquitectura Limpia:** Desarrollado modularmente separando la lógica del backend, el comportamiento del cliente y los estilos.
* **Seguridad Integrada:** Backend protegido contra vulnerabilidades comunes (como Inyecciones SQL y ataques XSS).
* **Interfaz Adaptable:** Diseño limpio y responsivo para una experiencia fluida tanto en escritorio como en dispositivos móviles.

---

## 📁 Estructura del Repositorio

El proyecto está organizado en los siguientes módulos y carpetas principales:

* `📂 PHP/`: Contiene el núcleo de la aplicación, el procesamiento de solicitudes HTTP (`POST`/`GET`), la gestión de sesiones y el control de la lógica del negocio.
* `📂 Datos/`: Aloja los scripts de conexión de la base de datos (utilizando PDO de forma segura) y las estructuras de tablas.
* `📂 js/`: Incluye la lógica del lado del cliente (como `app.js`) para manejar validaciones y dinamismo sin recargar la página.
* `📂 CSS/`: Estilos y maquetación visual para la interfaz del usuario.
* `📂 Documentación/`: Manuales técnicos y guías adicionales del sistema.
* `📄 index.html`: Punto de entrada principal de la interfaz visual de la aplicación.

---

## 🛠️ Tecnologías Utilizadas

* **Backend:** PHP (Arquitectura limpia, sesiones y PDO)
* **Frontend:** HTML5, CSS3 y JavaScript nativo (`app.js`)
* **Base de Datos:** MySQL
* **Estilo de Código:** Formateado bajo estándares limpios y legibles (estilo Prettier).

---

## 🔧 Requisitos e Instalación Local

Para levantar este proyecto en tu entorno local, necesitas un servidor web local como **XAMPP** o **MAMP**.

1. **Clonar el repositorio** dentro de la carpeta raíz de tu servidor (`htdocs`):
   ```bash
   git clone [https://github.com/angel-sepulveda/sistema-citas-web.git](https://github.com/angel-sepulveda/sistema-citas-web.git)
