# React TypeScript boilerplate in Vite

A starter kit for developing a web application with a minimal setup to get React + Typescript working in Vite with HMR and some linting rules..

## Get started

### Install

```js
git clone https://github.com/kankaro/vite-react-ts-boilerplate.git vite-react-typescript
```

Once the clone is done, go to the `vite-react-typescript` directory and from there issue the command `npm install` to install all the dependencies. Once done you are good to start the development.

### Server

To run the local development server

```js
npm run dev
```

To build a production code

```js
npm run build
```

To run the local production server

```js
npm run preview
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Editor Configuration

A `.vscode` folder is provided out-of-the-box which includes extensions and settings that you can modify based on your preferences.
By the default the workspace settings uses the following font.

- [Victor Mono](https://rubjo.github.io/victor-mono/)
- [Dank Mono](https://github.com/codewithbehzad/Best-Vs-Code-fonts-/blob/main/DankMono.zip)
- [Jetbrains Mono](https://www.jetbrains.com/lp/mono/)

Feel free to modify the `editor.fontFamily` settings for the font you like.

```json
{
  // Other config settings
  "editor.fontFamily": "Victor Mono, Dank Mono, Jetbrains Mono, Consolas, 'Courier New', monospace"
}
```

## Code linter and formatter

- [eslint](https://eslint.org/) a static code analysis tool for identifying problematic patterns found in JavaScript code.
- [prettier](https://prettier.io/) an opinionated code formatter which enforces a consistent style for your code.
- [stylelint](https://stylelint.io/) a mighty CSS linter that helps you avoid errors and enforce conventions.
- [commitlint](https://commitlint.js.org/) helps your team adhere to a commit convention.

To lint the code

```js
npm run lint
```

To lint the code with auto fix

```js
npm run lint:fix
```

To lint the CSS

```js
npm run css:lint
```

To lint the CSS with auto fix

```js
npm run css:lint-fix
```

## Testing

- [Vitest](https://vitest.dev) the test runner/framework.
- [React Testing Library](https://github.com/testing-library/react-testing-library) for the test utility.
- [Vitest UI](https://vitest.dev/guide/ui.html) provides a beautiful UI to view and interact with your tests.
- [V8](https://v8.dev/blog/javascript-code-coverage) for the test coverage.

To run all the test files.

```js
npm test
```

To run a single test file.

```js
npm test <filename>
npm test Welcome.test // This will run the Welcome.test file alone
```

To run all the test files in `watch` mode

```js
npm run test:watch
```

To run a single test file in `watch` mode

```js
npm run test:watch <filename>
npm run test:watch Welcome.test // This will run the Welcome.test file alone
```

To run all the test in the browser which will auto open a tab in your default browser to view the test result

```js
npm run test:ui
```

To run a test coverage

```js
npm run test:coverage
```

To preview the testing report in the browser

```js
npm run test:report:preview
```
