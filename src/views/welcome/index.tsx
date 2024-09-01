import { Counter } from '@features/counter/loadable';

import reactLogo from '/react.svg';
import typescriptLogo from '/typescript.svg';
import viteLogo from '/vite.svg';

export function Welcome() {
  return (
    <div id="body">
      <div className="flex items-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="h-44 object-cover p-6 filter transition duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer" className="mx-4">
          <img
            src={reactLogo}
            className="h-44 object-cover p-6 filter transition duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">
          <img
            src={typescriptLogo}
            className="h-44 object-cover p-6 filter transition duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#516af8aa]"
            alt="Typescript logo"
          />
        </a>
      </div>

      <h1 className="text-5xl">Vite + React + Typescript</h1>

      <div className="p-8">
        <Counter />
        <p className="mt-2">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-neutral-500">
        Click on the Vite, React and Typescript logos to learn more
      </p>
    </div>
  );
}
