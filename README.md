<p align="center">
<a target="_blank" href="https://v3.vuejs.org/"><img src="https://img.shields.io/badge/-Vue%203-42b883?logo=vue.js"></a>
<a target="_blank" href="https://router.vuejs.org/"><img src="https://img.shields.io/badge/-Vue%20Router-brightgreen?logo=vue-router"></a>
 <a target="_blank" href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript"></a>
<a target="_blank" href="https://sass-lang.com/"><img src="https://img.shields.io/badge/-Sass-pink?logo=sass"></a>
<a target="_blank" href="https://eslint.org/"><img src="https://img.shields.io/badge/-Eslint-orange?logo=eslint"></a>
<a target="_blank" href="https://prettier.io/"><img src="https://img.shields.io/badge/-Prettier-yellow?logo=prettier"></a>
<a target="_blank" href="https://pinia.vuejs.org/"><img src="https://img.shields.io/badge/-Pinia-green?logo=pinia"></a>
<a target="_blank" href="https://github.com/lukasgeiter/gettext-extractor"><img src="https://img.shields.io/badge/-Gettext%20Extractor-lightgrey"></a>
<a target="_blank" href="https://github.com/zloirock/core-js"><img src="https://img.shields.io/badge/-core--js-ff69b4"></a>
</p>


# Internationalizable TS-vue-boilerplate

<p align="center">
    <a target="_blank" href="https://v3.vuejs.org/">
        <img src="https://vuejs.org/images/logo.png" width="200">
    </a>
    <a target="_blank" href="https://krakenlabsweb.com/">
        <img src="https://krakenlabsweb.com/img/aro-kraken.83653f87.png" width="200">
    </a>
</p>


## Description

This is an opinionated boilerplate project for Vue 3 that comes with several pre-configured features to help you kickstart your development process. The boilerplate is designed with internationalization in mind, making it easier for you to build multilingual applications.

## Template Features

The TS-vue-boilerplate comes with the following features:

- **Vue 3**: The project uses Vue 3, the latest major version of the Vue.js framework, which brings improved performance and new features. [Learn more](https://v3.vuejs.org/)

- **Vue Router**: Vue Router is integrated & ready to provide routing capabilities for your Vue.js application, making it easy to create single-page applications with multiple views. [Learn more](https://router.vuejs.org/)

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

2. Run the following command to create a new project directory and clone the boilerplate:

```bash
npx degit https://github.com/ChemaAlfonso/ts-vue-boilerplate <project-directory>
```

## Internationalization

The provided gettext extractor extracts texts to generate translations on several ways:
```html
<!-- Extract from scripts using getText function -->
<script>getText('text')</script>

<!-- Extract innerText content from elements with gettext attr -->
<span v-gettext>text</span>

<!-- Extract from elements with getText attrs -->
<span :my-attr="getText('text')"></span>

<!-- Extract from elements with getText content -->
<span>{{ getText('text') }}</span>
```

1. Use the provided `getText` function or `v-gettext` directive across your project.

2. Run:
```bash
 npm run generate-translations
```
3. A .pot file is generated on ./lang

## Directory Structure

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
