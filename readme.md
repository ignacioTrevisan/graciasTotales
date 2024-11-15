# GraciasTotales

GraciasTotales es una aplicación que implementa un sistema de puntos junto con sus premios canjeables y sorteos, fue desarollada utilizando el stack MERN (MongoDB, Express, React, Node.js) con soporte para plataforma web y móvil (Android).

### Proposito

El proyecto "GraciasTotales" surgió para modernizar el sistema de sorteos y fidelización de clientes de una tienda local en Villaguay, un pequeño pueblo donde la tecnología no está tan extendida como en las ciudades más grandes.

Inicialmente, la tienda realizaba sorteos mensuales para los clientes, donde cada comprador depositaba un papelito en una caja, y el dueño sorteaba en directo por Instagram. El objetivo de la aplicación era digitalizar este proceso y agregar un sistema de puntos para que los clientes pudieran canjear premios.

Aunque la aplicación funcionó durante un tiempo, según mi cliente surgieron problemas debido a que muchos clientes no tenían acceso a datos móviles en el local y la conexión Wi-Fi era deficiente cuando estaba disponible. Esto llevó al dueño a dejar de usarla, ya que el proceso manual de registrar en papel a los clientes sin datos y luego consolidar esta información para realizar el sorteo se volvió demasiado complicado.

Finalmente, le hice una versión para Android y decidí mantener la aplicación completa como parte de mi portafolio personal, ya que fue una excelente oportunidad para aprender sobre el desarrollo completo de una solución digital y enfrentar los desafíos de trabajar con un cliente real.

## Características principales
- Gestión de usuarios (registro, inicio de sesión, perfiles).
- Aplicación separada para Android.
- Gestion de productos disponibles (creacion, edicion y eliminacion)
- Sorteos para clientes recientes (esta parte a fines de demostracion para el porfolio esta disponibles para todos los clientes)

## Estructura del proyecto
El proyecto está dividido en tres partes principales:
1. **Backend**: Construido con Node.js, Express y MongoDB.
2. **Frontend Web**: Construido con React.js.
3. **Aplicación Android**: Construido con React Native.

### 1. Backend
Directorio: `./backend`

Este es el servidor de la aplicación, que maneja la lógica de negocio, y la conexión con la base de datos MongoDB.

#### Tecnologías:
- Node.js
- Express.js
- MongoDB

#### Instalación:
1. Navega al directorio `Back-Graciastotales`.
2. Ejecuta el siguiente comando para instalar las dependencias:
    npm install
3. Configura las variables de entorno en un archivo .env
MONGODB_URI=<tu_uri_de_mongodb>
JWT_SECRET=<tu_secreto_jwt>
PORT=<puerto_por_defecto>
4. Iniciar el servidor:
    npm start


### 2. FrontEnd


Este es el cliente de la aplicación para navegadores web. Construido con React.js

#### Tecnologías:
- React.js
- Firebase Autentication
- Firestore Database
- Bootstrap
- Redux
- Axios



1. Navega al directorio `Front-graciasTotales`
2. Instala las dependencias: 
    yarn
3. Crear el archivo .env en el directorio principal del front de tal manera que funcione en local
VITE_API_URL=http://localhost:puerto/api (aunque por el momento el servidor onrender que esta comentado funciona)
4. Ejecuta la aplicacion en modo desarrollo 
    yarn dev

### 3. Android

Es la versión móvil de la aplicación construida con React Native para dispositivos Android.

#### Tecnologías:
- React.js
- Firebase Autentication
- Firestore Database
- zustand
- TypeScript
1. Navega al directorio `VersionAndroid`
2. Instala las dependencias:
    yarn
3.  La version de android carece de archivo .env, entonce slo que hay que hacer es ir al archivo graciasTotalesFetcher.ts, que se encuentra en: src/config/adapters/graciasTotalesFetcher.ts y cambiar la baseUrl por la ip de donde tengas el api corriendo (aunque, denuevo, por el momento el servidor de onrender funciona)
4. Conectar un dispositivo fisico con depuracion usb activada o emulador del mismo y ejecutar la aplicacion
npx react-native run-android




Si tienes preguntas o comentarios sobre este proyecto, puedes contactarme a través de Nachotizii988@gmail.com.

 