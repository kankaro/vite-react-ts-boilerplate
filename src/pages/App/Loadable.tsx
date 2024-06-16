import { lazyLoad } from '../../utils/loadable';

export const App = lazyLoad(
  () => import('./index'),
  (module) => module.App,
  {
    fallback: <div>Loading...</div>,
  },
);
