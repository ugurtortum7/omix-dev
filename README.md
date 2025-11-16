# omix-prod

A modern Vue 3 + TypeScript project with Vite, Vue Router, and Pinia state management.

## 🚀 Features

- ⚡️ **Vue 3** - Progressive JavaScript Framework
- 🦾 **TypeScript** - Type-safe development
- 🗂 **Vue Router** - Official routing solution
- 🍍 **Pinia** - Intuitive state management
- 📦 **Vite** - Next generation frontend tooling
- 🎨 **Prettier** - Code formatting
- 🛠️ **Vue DevTools** - Enhanced debugging experience

## 📋 Requirements

- Node.js: `^20.19.0 || >=22.12.0`
- npm or yarn

## 🔧 Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## 🌐 Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 📦 Project Setup

```sh
npm install
```

## 🛠️ Development

### Compile and Hot-Reload for Development

```sh
npm run dev
```

The development server will start at `http://localhost:5173/`

### Type-Check

```sh
npm run type-check
```

### Format Code with Prettier

```sh
npm run format
```

## 🏗️ Production

### Compile and Minify for Production

```sh
npm run build
```

This will:
1. Run TypeScript type checking
2. Build optimized production files to `dist/` folder

### Preview Production Build

```sh
npm run preview
```

## 📁 Project Structure

```
omix-prod/
├── public/           # Static assets
├── src/
│   ├── assets/       # Styles and assets
│   ├── components/   # Reusable Vue components
│   ├── router/       # Vue Router configuration
│   ├── stores/       # Pinia stores
│   ├── views/        # Page components
│   ├── App.vue       # Root component
│   └── main.ts       # Application entry point
├── index.html        # HTML entry point
├── vite.config.ts    # Vite configuration
└── tsconfig*.json    # TypeScript configuration
```

## 🔗 Useful Links

- [Vite Configuration Reference](https://vite.dev/config/)
- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
