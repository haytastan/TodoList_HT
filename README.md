# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Introduction
This is a simple TODO app built with using JavaScript in Visual Studio (https://learn.microsoft.com/en-us/visualstudio/javascript/javascript-in-visual-studio?view=vs-2022). This front-end uses React and Vite.

## Get started in Visual Studio 2022
To get started with this in Visual Studio follow the steps below.

- Install Visual Studio 2022 with the Node.js workload as well as the Web workload
- Clone this repo locally
- F5 to Start Debugging
## Features
- Add Tasks: Users can input and add new tasks to the list.
- Move Tasks: Tasks can be moved up and down in the list.
- Delete Tasks: Users can remove tasks from the list.
- Interactive UI: Buttons allow task management directly from the interface.

## Get started outside of Visual Studio
Make sure you have the latest stable version of Node installed. Then run the commands below.


- cd TodoList_HT
- npm ci
- npm run dev

## Warning by Hayati TAŞTAN: 
Before the release of React 15.5.0, PropTypes were available in the React package, but now you have to add the prop-types library in your project.
You can do so by running the following command in your terminal with admin:
- npm install prop-types --save

## License
This project is licensed under the MIT License.
