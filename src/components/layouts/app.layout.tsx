import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <>
      <Helmet
        titleTemplate="%s - Vite React Typescript Boilerplate"
        defaultTitle="React Typescript Boilerplate"
      >
        <meta
          name="description"
          content="A starter kit for developing web application using ReactJS with Typescript in a minimal setup to get working in Vite with HMR and some linting rules."
        />
      </Helmet>
      <Outlet />
    </>
  );
}
