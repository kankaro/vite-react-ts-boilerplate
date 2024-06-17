import { lazyLoad } from '@utils/loadable';

export const Welcome = lazyLoad(
  () => import('./index'),
  (module) => module.Welcome,
  {
    fallback: <div>Loading...</div>,
  },
);
