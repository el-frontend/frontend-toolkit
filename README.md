# frontend-toolkit

**Frontend-toolkit** is a command-line tool designed to simplify the creation and configuration of frontend applications. With an interactive interface, it allows developers to select the framework, libraries, and UI tools that best fit their needs, streamlining the process of initializing new projects.

## Features

- **Framework Selection**: Choose from popular options like ReactJS, NextJS, VueJS, Astro, Nuxt, and Angular.
- **Library Management**: Incorporate essential libraries such as react-router-dom, react-query, zod, dayjs, among others.
- **UI Library Integration**: Select your preferred user interface library, including ShadcnUI, MUI, AntDesign, and Tailwind.
- **TypeScript Support**: Optionally configure your project with full TypeScript support.
- **Automated Dependency Installation**: Generate and execute automatic installation commands for selected dependencies.
- **Easy Customization**: Configure additional options based on the chosen framework and libraries, adapting to your project's specific needs.

### Installation

To install **elfrontend-toolkit**, run:

```bash
npm install -g elfrontend-toolkit
```

### Usage

Start the interactive assistant with:

```bash
frontend-cli
```

Follow the prompts to set up your new frontend project quickly and efficiently.

## Tasks

- [ ]  Research name availability for frontend-cli or frontend-toolkit
  - [ ]  Pending for names
    - [x]  elfrontend-toolkit
    - [ ]  elfrontend-cli
    - [ ]  elfront
    - [ ]  elfront-cli
- [ ]  Research how to create a CLI
  - [x]  Select command utility
    - [x]  <https://github.com/tj/commander.js>
      - [x]  Can pass parameters
      - [x]  Can add colors
- [ ]  What are the first functionalities we should include
  - [x]  Create app, first choose name
  - [ ]  Next choose framework/library
    - [x]  ReactJS
    - [x]  NextJS
    - [x]  Astro
    - [x]  Vue?
    - [ ]  Nuxt?
    - [ ]  Svelte?
    - [x]  Angular
  - [ ]  Choose libraries for the project
    - [ ]  ReactJS
      - [ ]  Router
  - [ ]  Next choose UI library
    - [ ]  ReactJS | NextJS
      - [ ]  ShadcnUI
      - [ ]  MUI
      - [ ]  AntDesign
      - [ ]  Tailwind
  - [ ]  Depending on the chosen UI framework, allow selecting default views to add
- [ ]  Add prompt validations
- [ ]  How to deploy it on npm
- [ ]  Create README and how to contribute on GitHub
- [ ]  Promote it
- [ ]  Remove nodemon
- [ ]  Add husky and lint stage configurations
- [ ]  Add semantic-release and commitizen
- [ ]  Add tests
