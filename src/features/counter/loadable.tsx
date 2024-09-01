import { lazyLoad } from '@utils/helpers/loadable';

export const Counter = lazyLoad(
  () => import('./index'),
  (module) => module.Counter,
  {
    fallback: <div>Loading...</div>,
  },
);
