import { RouteObject, useRoutes } from 'react-router-dom';

import { AppLayout } from '@components/layouts/app.layout';
import { NotFoundPage } from '@components/not-found-page/loadable';

import { Welcome } from './welcome';

/**
 * This is the route configuration of the main pages of the application.
 * Feel free to add or remove main routes here.
 */
const pageRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [{ index: true, element: <Welcome /> }],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

/**
 * Returns the element of the route that matched the current location, prepared with the correct context to render the remainder of the route tree.
 * Route elements in the tree must render an `<Outlet>` to render their child route's element.
 *
 * The elements return in this hook is rendered in the `AppLayout` component which is called in the `pageRoutes` config above.
 */
export function usePageRoutes() {
  const pages = useRoutes(pageRoutes);
  return pages;
}
