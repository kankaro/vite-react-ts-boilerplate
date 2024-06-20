import { Helmet } from 'react-helmet-async';

import './styles/Welcome.css';
import './styles/index.css';

import reactLogo from '@assets/react.svg';
import typescriptLogo from '@assets/typescript.svg';
import viteLogo from '/vite.svg';

import { useCounter } from './hooks/useCounter';
import { useStateSelectors } from './hooks/useStateSelectors';

export function Welcome() {
  const { counterValue } = useStateSelectors();
  const { incrementCounter, decrementCounter } = useCounter();

  return (
    <>
      <Helmet>
        <title>Welcome</title>
        <meta name="description" content="Default component" />
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
          <div className="flex flex-row items-center justify-center space-x-3">
            <button
              type="button"
              disabled={counterValue === 0}
              onClick={decrementCounter}
            >
              -
            </button>
            <p>count is {counterValue}</p>
            <button type="button" onClick={incrementCounter}>
              +
            </button>
          </div>
          <p className="mt-4">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite, React and Typescript logos to learn more
        </p>
      </div>
    </>
  );
}

export default Welcome;
