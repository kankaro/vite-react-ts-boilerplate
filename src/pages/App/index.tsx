import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import './App.css';
import './index.css';

import reactLogo from '@assets/react.svg';
import typescriptLogo from '@assets/typescript.svg';
import viteLogo from '/vite.svg';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet
        titleTemplate="%s - Vite React Typescript boilerplate"
        defaultTitle="Vite React Typescript boilerplate"
      >
        <meta
          name="description"
          content="A starter kit for developing web application using Vite + React + Typescript."
        />
      </Helmet>

      <div className="font-sans">
        <div className="flex flex-row items-center justify-center">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={typescriptLogo}
              className="logo react"
              alt="Typescript logo"
            />
          </a>
        </div>
        <h1>Vite + React + Typescript</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="mt-4">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
