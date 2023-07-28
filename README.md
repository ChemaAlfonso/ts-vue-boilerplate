<p align="center">
  <img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/-Sass-pink?logo=sass" alt="Sass">
  <img src="https://img.shields.io/badge/-core--js-ff69b4" alt="core-js">
  <img src="https://img.shields.io/badge/-Eslint-orange?logo=eslint" alt="Eslint">
  <img src="https://img.shields.io/badge/-Prettier-yellow?logo=prettier" alt="Prettier">
  <img src="https://img.shields.io/badge/-Pinia-green?logo=pinia" alt="Pinia">
  <img src="https://img.shields.io/badge/-Gettext%20Extractor-lightgrey" alt="Gettext Extractor">
</p>


# Internationalizable TS-vue-boilerplate

<p align="center">
<img src="https://vuejs.org/images/logo.png" width="200">
<img src="https://krakenlabsweb.com/img/aro-kraken.83653f87.png" width="200">
</p>


## Description

This is an opinionated boilerplate project for Vue 3 that comes with several pre-configured features to help you kickstart your development process. The boilerplate is designed with internationalization in mind, making it easier for you to build multilingual applications.

## Template Features

The TS-vue-boilerplate comes with the following features:

- **Typescript**: The project is set up with TypeScript, a powerful typed superset of JavaScript that enhances your code's maintainability and productivity. [Learn more](https://www.typescriptlang.org/)

- **Sass**: Utilize Sass, a popular CSS preprocessor, to create more organized and maintainable styles for your Vue components. [Learn more](https://sass-lang.com/)

- **Core-js**: Core-js is included to provide polyfills for ECMAScript features to ensure better cross-browser compatibility. [Learn more](https://github.com/zloirock/core-js)

- **Eslint**: The project integrates Eslint, a tool for identifying and fixing common errors and enforcing coding standards. This helps ensure consistent code quality across your project. [Learn more](https://eslint.org/)

- **Prettier**: Prettier is configured in the project to automatically format your code, making it more readable and ensuring consistent styles throughout the codebase. [Learn more](https://prettier.io/)

- **Pinia**: Pinia is used as the state management solution, providing a simple and reactive store for managing the application's state. [Learn more](https://pinia.vuejs.org/)

- **Gettext Extractor**: This boilerplate includes Gettext extractor, a tool to extract internationalization messages from your Vue components, making it easier to handle translations. [Learn more](https://github.com/lukasgeiter/gettext-extractor)

## Getting Started (Keeping git history)

1. Clone this repository.
2. Install the required dependencies by running `npm install`.
3. Start the development server with `npm run serve`.
4. You are now ready to build your amazing internationalized Vue.js application!

## How to use on your own project (Fresh copy)

To start using this boilerplate in your own project, you can use the [degit](https://github.com/Rich-Harris/degit) tool with "npx" to clone the repository without keeping the git history. This way, you can get a fresh copy of the boilerplate and customize it for your needs. Follow these steps:

1. Open your terminal or command prompt.

2. Run the following command to create a new project folder and clone the boilerplate:

```bash
npx degit https://github.com/ChemaAlfonso/ts-vue-boilerplate <project-folder>
```

## Internationalization

1. Use getText provided function across your project.
2. Run npm run generate-traductions.
2. A .pot file is generated on ./lang

## Folder Structure

The project structure is organized as follows:

- 📁 lang
    - 📄 extract-text.js
        - Script to extract gettext strings
    - 📄 terms-headers-generator.js
        - Script to generate headers for gettext terms

- 📁 node_modules
    - Node.js modules (generated after running `npm install`)

- 📁 public
    - 📄 favicon.ico
    - 📄 index.html

- 📁 src
    - 📁 assets
        - 📁 img
            - Image files
        - 📁 styles
            - SCSS stylesheets
    - 📁 components
        - Vue components
    - 📁 lang
        - Language-related files
    - 📁 modules
        - Project related modules to use on components
    - 📁 router
        - Vue Router configuration
    - 📁 views
        - Vue views
    - 📄 App.vue
        - Root Vue component
    - 📄 main.ts
        - Entry point of the application
    - 📄 shims-vue.d.ts
        - TypeScript declaration file for Vue files

- 📄 .browserslistrc
    - Browserslist configuration file

- 📄 .eslintrc.js
    - Eslint configuration file

- 📄 .gitignore

- 📄 .prettierrc
    - Prettier configuration file

- 📁 babel.config.js
    - Babel configuration file

- 📄 package-lock.json
    - Package lock file

- 📄 package.json
    - Package information and dependencies

- 📄 README.md
    - Readme file (you are here!)

- 📄 tsconfig.json
    - TypeScript configuration file

- 📄 tsconfig.json
    - TypeScript configuration file

- 📄 vue.config.js
    - Vue CLI configuration file


## Contributing

We welcome contributions to improve the boilerplate and make it even more useful for the community. If you have any suggestions, bug fixes, or new features to propose, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use it and modify it to suit your needs.

---

Thank you for using TS-vue-boilerplate! Happy coding! 🚀
