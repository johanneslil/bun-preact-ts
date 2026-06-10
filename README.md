# Preact TS with Bun runtime

This is a simple template for starting a Preact project bootstrapped with [Bun](https://bun.sh/), with TypeScript instead of the default JavaScript configuration.

It uses Bun's built-in dev server and bundler — no Vite, webpack, or extra build tooling. Bun serves `index.html` directly, transpiles TypeScript/JSX and bundles CSS and assets out of the box, with hot module reloading in development.

## Getting Started

### Scaffold a new project

To create a TS Preact project with Bun:

```sh
bun create johanneslil/bun-preact-ts ./bun-preact-ts-app
```

To create a regular JS Preact project with bun:

```sh
bun create preact ./bun-preact-app
```

### Development

Install dependencies, then start the development server.

```sh
bun install
bun run dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `src/app.tsx`. The page auto-updates as you edit the file (HMR).

### Production build

```sh
bun run build
```

The bundled, minified output is written to `dist/`.

### Type checking

```sh
bun run typecheck
```

## Learn More

To learn more about the tools used in this template, take a look at the following resources:

- [Preact Documentation](https://preactjs.com/guide/v10/getting-started) - learn about Preact's features.
- [Learn Preact](https://preactjs.com/tutorial/) - an interactive Preact tutorial.
- [Bun Documentation](https://bun.com/docs) - the Bun runtime, bundler, and dev server.
- [Bun HTML & fullstack dev server](https://bun.com/docs/bundler/html) - how `index.html` is served and bundled.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript.

You can check out the [Preact GitHub repository](https://github.com/preactjs/preact) and the [Bun GitHub repository](https://github.com/oven-sh/bun) - your feedback and contributions are welcome!
