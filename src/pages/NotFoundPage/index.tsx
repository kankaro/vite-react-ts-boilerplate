import { Helmet } from 'react-helmet-async';

import Img404 from '@assets/images/404/404-2.png';
import GroupImg from '@assets/images/404/Group.png';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>

      <div className="flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 md:gap-28 md:px-44 md:py-20 lg:flex-row lg:px-24 lg:py-24">
        <div className="relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24">
          <div className="relative">
            <div className="absolute">
              <div className="relative">
                <h1 className="my-2 text-2xl font-bold text-neutral-800">
                  The page you are looking for does not exist.
                </h1>
                <p className="my-2 text-base text-neutral-700">
                  How you got here is a mystery :)
                </p>
              </div>
            </div>
            <div>
              <img src={Img404} alt="404-2" />
            </div>
          </div>
        </div>
        <div>
          <img src={GroupImg} alt="Group" />
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
