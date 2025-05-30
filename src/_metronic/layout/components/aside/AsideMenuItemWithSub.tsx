
import React from "react";
import clsx from "clsx";
import { useLocation } from "react-router";
import { checkIsActive, KTIcon, WithChildren } from "../../../helpers";


type Props = {
  to: string;
  title: string;
  icon?: string;
  fontIcon?: string;
  hasBullet?: boolean;
  isCollapsed?: boolean;
};

const AsideMenuItemWithSub: React.FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  hasBullet,
  isCollapsed = false,
}) => {
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);

  return (
    <div

      className={clsx(
        "menu-item",
        { "here show": isActive && !isCollapsed },
        "menu-accordion"
      )}

      data-kt-menu-trigger="click"
    >
      <span className="menu-link">
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
        )}
        {icon && (
          <span className="menu-icon">
            <KTIcon iconName={icon} className="fs-2" />
          </span>
        )}
        {fontIcon && <i className={clsx("bi fs-3", fontIcon)}></i>}

        <span className="menu-title">{title}</span>
        <span className="menu-arrow"></span>
      </span>
      <div
        className={clsx("menu-sub menu-sub-accordion", {
          "menu-active-bg": isActive,
          "d-none": isCollapsed, // Hide submenu when collapsed

        })}
      >
        {children}
      </div>
    </div>  
  );
};

export { AsideMenuItemWithSub };

