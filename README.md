# React Password Checker

Una aplicación web simple que verifica la seguridad de una contraseña. Esta aplicación está construida con **React**, utiliza **TypeScript**, **TailwindCSS**, y **Framer Motion** para las animaciones. Está alojada en Firebase.

## Características

- Verifica la fuerza de la contraseña en tiempo real.
- Proporciona mensajes detallados sobre los requisitos no cumplidos.
- Cambia el color y el texto del botón según la fuerza de la contraseña:
  - **Rojo**: Contraseña débil.
  - **Naranja/Amarillo/Azul**: Contraseña aceptable.
  - **Púrpura/Verde**: Contraseña fuerte.
- Animaciones fluidas para los mensajes y botones.

## Requisitos

- Node.js (v18+ recomendado).
- NPM o Yarn.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Kenkyoo/react-password-checker.git
   cd react-password-checker

    Instala las dependencias:

npm install

Inicia el servidor de desarrollo:

    npm run dev

    Abre la aplicación en tu navegador en http://localhost:5173.

Scripts Disponibles

    npm run dev: Inicia el servidor de desarrollo.
    npm run build: Genera la versión optimizada para producción.
    npm run lint: Analiza el código con ESLint.
    npm run preview: Previsualiza la versión de producción.
    npm run tailwind: Compila los estilos con TailwindCSS.

Tecnologías Utilizadas

    React: Biblioteca principal para construir la interfaz.
    TypeScript: Añade tipado estático al proyecto.
    Vite: Herramienta para construir y desarrollar aplicaciones web modernas.
    TailwindCSS: Framework de CSS para estilos rápidos y personalizables.
    Framer Motion: Animaciones fluidas y fáciles de implementar.
    Firebase: Hosting para aplicaciones rápidas y seguras.

Cómo Funciona

    Entrada de contraseña: El usuario escribe una contraseña en el campo de texto.
    Verificación de fuerza: El componente Verify evalúa la contraseña en tiempo real contra los siguientes criterios:
        Longitud mínima de 8 caracteres.
        Al menos una letra mayúscula.
        Al menos una letra minúscula.
        Al menos un número.
        Al menos un carácter especial.
    Feedback dinámico: Muestra un mensaje sobre los requisitos faltantes y cambia el estilo del botón.

Deploy en Firebase

El proyecto está alojado en Firebase. Para desplegarlo tú mismo:

    Instala Firebase CLI:

npm install -g firebase-tools

Inicia sesión:

firebase login

Configura Firebase en el proyecto:

firebase init

Despliega:

    firebase deploy

Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o deseas añadir nuevas características, por favor abre un issue o crea un pull request.
Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
