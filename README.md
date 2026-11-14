# aun pendiente el nombre es probicional 

Aplicación web de lista de tareas hecha con **React** y **Vite**. Permite agregar tareas, marcarlas como completadas, eliminarlas y filtrarlas, con un diseño sencillo en forma de tabla tipo  un doslmiles, y un fondo animado ,cambienlosi quieren wbn ,mentalist btw.

## Funciones

- **Agregar tareas:** escribe en el campo de texto y presiona `Enter` o el botón **Agregar**.
- **Completar tareas:** haz clic en la fila o en la casilla para marcarla como completada. El texto se tacha.
- **Eliminar tareas:** botón **Eliminar** en cada fila.
- **Filtrar:** botones **Todas**, **Pendientes** y **Completadas**.
- **Contador:** muestra en tiempo real cuántas tareas pendientes quedan.
- **Guardado automático:** las tareas se guardan en el `localStorage` del navegador, así que no se pierden al recargar la página.

##Que se uso para el prpyecto

- React
- Vite
- JavaScript (ES6)
- HTML y CSS

## Estructura del proyecto




mi-todo-app/
├── public/
│   └── fondo-todo.gif
├── src/
│   ├── components/
│   │   ├── TaskFilter.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskStats.jsx
│   ├── App.css
│   ├── App.jsx
│   └── todo-main.jsx
todo-app.html
 vite.config.js
```

El archivo HTML principal se llama `todo-app.html` y no `index.html`. Por eso `vite.config.js` indica cuál es la página de entrada.

## Requisitos

- [Node.js](https://nodejs.org) versión LTS
- [Git](https://git-scm.com)
- Un navegador web

## Instalación y uso en Linux

1. Instala Node.js con nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

2. Cierra y vuelve a abrir la terminal, y luego instala la versión LTS:

```bash
nvm install --lts
```

3. Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/pastosec0/mi-todo-app.git
cd mi-todo-app
npm install
```

4. Inicia la aplicación:

```bash
npm run dev
```

## Instalación y uso en Windows

1. Descarga e instala la versión **LTS** de Node.js desde [nodejs.org](https://nodejs.org) y Git desde [git-scm.com](https://git-scm.com). También puedes instalarlos desde PowerShell:

```powershell
winget install OpenJS.NodeJS.LTS
winget install Git.Git
```

2. Cierra y vuelve a abrir PowerShell o el Símbolo del sistema.
3. Clona el repositorio e instala las dependencias:

```powershell
git clone https://github.com/pastosec0/mi-todo-app.git
cd mi-todo-app
npm install
```

4. Inicia la aplicación:

```powershell
npm run dev
```

Si PowerShell bloquea la ejecución de `npm` por la política de scripts, usa el Símbolo del sistema (`cmd`) o ejecuta `npm.cmd run dev`.

## Abrir la aplicación

Al correr `npm run dev` el navegador se abre solo en la dirección de la app. Si no se abre, entra manualmente a:

```
http://localhost:5173/todo-app.html
```

Si el puerto 5173 está ocupado, Vite usa otro (por ejemplo 5174) y lo muestra en la terminal. Recuerda agregar `/todo-app.html` al final de la dirección.

Para detener el servidor presiona `Ctrl + C` en la terminal.

## Generar la versión para producción

```bash
npm run build
```

Los archivos finales se crean en la carpeta `dist`. Para probarlos localmente:

```bash
npm run preview
```

no haymucho mas que decir  i use arch btw
by pasto-secoy ,yulian aranis


<img width="720" height="720" alt="Maka Albarn icon _ Soul eater" src="https://github.com/user-attachments/assets/42827f7a-b611-412e-9874-b3312e847d96" />

