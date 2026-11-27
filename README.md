# 📱 Comisión 91640 · Desarrollo de Aplicaciones — Coderhouse

> Repositorio oficial de la **Comisión 91640** de Coderhouse. En este curso desarrollamos **TaskFlow**, una aplicación móvil de gestión de tareas construida con **React Native** y **Expo**, aplicando desde los fundamentos hasta estado global, autenticación y persistencia en la nube.

## 👨‍🏫 Profesores

**Mariano Macias** — Profesor

|              |                                                                             |
| ------------ | --------------------------------------------------------------------------- |
| 🌐 Portfolio | [marianomaciasgandulfo.com](https://marianomaciasgandulfo.com/)             |
| 💻 GitHub    | [@soldiersnake](https://github.com/soldiersnake/)                           |
| 💼 LinkedIn  | [linkedin.com/in/marianomacias](https://www.linkedin.com/in/marianomacias/) |
| 📸 Instagram | [@marian.exe_dev](https://www.instagram.com/marian.exe_dev/)                |

**Adrian Gonzalez** — Profesor

|           |                                       |
| --------- | ------------------------------------- |
| 💻 GitHub | [@Adrgon](https://github.com/Adrgon/) |

## 🧰 Tecnologías

![React Native](https://img.shields.io/badge/React_Native-0.88-61DAFB?logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-SDK%2058-000020?logo=expo&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-estado_global-764ABC?logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Firestore_+_Auth-FFCA28?logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-JSX-F7DF1E?logo=javascript&logoColor=black)

- **React Native** — framework para apps móviles multiplataforma (iOS + Android)
- **Expo (SDK 58)** — ecosistema de herramientas para desarrollar, probar y desplegar
- **JavaScript (JSX)** — lenguaje del curso
- **Redux Toolkit** — estado global de la aplicación
- **React Navigation** — navegación con Stack y Bottom Tabs
- **Firebase (Firestore + Auth)** — persistencia en la nube y autenticación de usuarios
- **Expo ImagePicker** — acceso nativo a la galería para el avatar de perfil
- **AsyncStorage** — persistencia local del dispositivo

## 📋 Temario y estado de clases

| Clase |                     Módulo                     | Temas                                                                                                                                                                | Tecnología                        | Entregable                                              | Estado |
| :---: | :--------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------- | :----: |
|   1   |       Introducción a React Native y Expo       | Entorno de desarrollo y arranque del proyecto Expo · Fundamentos de React Native y el ecosistema Expo · Diferencias clave para desarrolladores web y primer contador | Expo / Expo Go / React Native     | 📌 Pre-entrega: estructura base de TaskFlow             |   ✅   |
|   2   | Componentes, estilos y estructura del proyecto | Organización: pantallas, componentes y recursos · Componentes y estilos · Tarjeta de perfil reutilizable con props                                                   | StyleSheet / Flexbox / Props      | 📌 Pre-entrega: pantallas iniciales y tarjeta de perfil |   ✅   |
|   3   |      Estado local, eventos y formularios       | Estado local y formularios controlados · Profundización en estados · Práctica: formulario de tareas en TaskFlow                                                      | useState / TextInput              | 📌 Pre-entrega: formulario funcional integrado          |   ✅   |
|   4   |   Listas, renderizado y detalle de elementos   | Fundamentos de listas y detalle · FlatList eficiente y lista interactiva · Profundización teórica                                                                    | FlatList / ScrollViews            | 📌 Pre-entrega: detalle del elemento y estados vacíos   |   ⬜   |
|   5   |           Navegación en React Native           | Configurar React Navigation en Expo · Stack y Bottom Tabs · Arquitectura de navegación profesional                                                                   | React Navigation (Stack + Tabs)   | 📌 Pre-entrega: consolidar la navegación de TaskFlow    |   ⬜   |
|   6   |         Redux Toolkit y estado global          | Store, slices y flujo global · Conexión de componentes y filtros globales · Profundización en Redux                                                                  | Redux Toolkit                     | 📌 Pre-entrega: estado global migrado a Redux           |   ⬜   |
|   7   |     Firebase, autenticación y persistencia     | Firebase y Firestore en Expo: configuración · Auth: registro, sesión y rutas protegidas                                                                              | Firebase / Firestore / Auth       | 📌 Pre-entrega: autenticación y persistencia            |   ⬜   |
|   8   |       Proyecto final: TaskFlow completo        | Expo ImagePicker: foto de perfil · Diseño de perfil y avatar · Integración de datos persistidos · Entrega final                                                      | Expo ImagePicker / Firebase / EAS | 🏁 Entrega final: TaskFlow listo para producción        |   ⬜   |

## 📂 Estructura del repositorio

```
COM-91640/
├── 01_CLASE/   # Proyecto integrador TaskFlow (Expo + React Native) código de la clase 1
├── 02_CLASE/          # Material y código de la clase 2
└── 03_CLASE/          # Material y código de la clase 3
```

## 🏁 Entrega final: TaskFlow completo y listo para producción

Al finalizar la formación, cada estudiante entrega la app **TaskFlow consolidada**, integrando todo lo aprendido: estado global, persistencia en la nube y funcionalidades nativas. No se trata de agregar código nuevo, sino de **consolidar, pulir y cerrar** el producto.

### Recorrido incremental (cadena de pre-entregas)

1. **Módulos 1–5** — Fundamentos y estructura: arquitectura de carpetas, componentes reutilizables (tarjeta de tarea), formularios controlados y navegación (Stack + Tabs) entre la lista y el detalle.
2. **Pre-entrega 1 (Módulo 6)** — Estado global de TaskFlow migrado a **Redux Toolkit**: centralizamos la lógica y cualquier pantalla conoce el estado de las tareas de forma síncrona.
3. **Pre-entrega 2 (Módulo 7)** — Autenticación y persistencia: **Firebase Auth** para usuarios y **Firestore** para que las tareas no se borren al cerrar la app.
4. **Módulo 8** — Funcionalidades nativas: **Expo ImagePicker**, gestión de permisos de hardware y avatar por usuario.

### Flujo del entregable final

- El usuario nuevo puede **registrarse**.
- Al ingresar, sus tareas se **sincronizan automáticamente desde Firestore** mediante Redux.
- Puede navegar entre su **lista de tareas, crear nuevas y ver el detalle** de cada una.
- En la sección **Perfil**, puede seleccionar una **foto de su galería** y verla actualizada en tiempo real.
- La **sesión se mantiene persistente**, pero el usuario puede **cerrar sesión de forma segura**.

### Criterios de aceptación globales

- ✅ **Integración funcional:** el estado de Redux debe estar sincronizado con Firestore (lectura/escritura).
- ✅ **Flujo de autenticación completo:** Login → App privada → Logout → Login.
- ✅ **Gestión de perfil:** ImagePicker sin errores de permisos y persistencia visual del avatar.
- ✅ **UI/UX mobile:** uso consistente de StyleSheet, SafeAreaView y FlatList en iOS y Android.
- ✅ **Estabilidad:** sin crashes al navegar rápidamente o al cancelar la selección de imagen.

### Instrucciones de submission

- **Repositorio:** código en GitHub/GitLab con un `.gitignore` que excluya `node_modules` y archivos sensibles de Firebase (incluir un `firebaseConfig.example.js`).
- **README:** instrucciones de ejecución (`npm install` → `npx expo start`).
- **Despliegue:** link de la app vía Expo Go (compartiendo el slug del proyecto) o build de **EAS**.
- **Evidencia visual:** capturas de pantalla o GIF mostrando el flujo de autenticación, la lista de tareas y la edición del perfil.

> 💡 **Cierre del programa:** de entender el DOM virtual a dominar los puentes nativos y la persistencia en tiempo real. El siguiente paso ya no es solo programar, sino pensar en el **despliegue a tiendas (App Store / Play Store)** y en la **optimización de performance**.
