import { lazyLoad } from '@utils/helpers/loadable';

export const NotFoundPage = lazyLoad(
  () => import('./index'),
  (module) => module.NotFoundPage,
  {
    fallback: <div>Loading...</div>,
  },
);
