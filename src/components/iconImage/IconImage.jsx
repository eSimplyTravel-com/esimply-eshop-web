import clsx from "clsx";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const IconImage = ({ handleLogoClick, isHomePage, showMenu, classNames }) => {
  return (
    <button
      onClick={handleLogoClick}
      className={clsx("flex items-center", classNames)}
    >
      <LazyLoadImage
        alt={import.meta.env.VITE_APP_PROJECT_TITLE}
        src={
          !isHomePage || showMenu ? "/logo/logo.png" : "/logo/logo-white.png"
        }
        width={120}
        height={32}
      />
    </button>
  );
};

export default IconImage;
