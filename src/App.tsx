import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@pages/NotFoundPage/Loadable';
import { Welcome } from '@pages/Welcome/Loadable';

export function App() {
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

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
