import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";

interface AsideMenuMainProps {
  isCollapsed?: boolean;
}

export function AsideMenuMain({ isCollapsed = false }: AsideMenuMainProps) {
  return (
    <>
     {/* BEGIN gestion ref */}
      <AsideMenuItemWithSub
        to="#"
        icon="shield-tick"
        title="Gestion des référentiels"
        isCollapsed={isCollapsed}
      >
        {/* BEGIN gestion fournisseur */}

        <AsideMenuItemWithSub
          to="#"
          icon="shield-tick"
          title="Gestion des Fournisseurs"
          isCollapsed={isCollapsed}
        >
          <AsideMenuItem
            to="/add-fournisseur"
            icon="plus"
            title="Création d'un Fournisseur"
            isCollapsed={isCollapsed}
          />
          <AsideMenuItem
            to="/fournisseurs"
            icon="list"
            title="Liste des fournisseurs"
            isCollapsed={isCollapsed}
          />
        </AsideMenuItemWithSub>
        {/* END Gestion Fournisseur */}
      </AsideMenuItemWithSub>

      {/* End gestion ref */}

      {/* <AsideMenuItem
        to="/dashboard"
        icon="element-11"
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
      /> */}
      {/* <AsideMenuItem to="/builder" icon="switch" title="Layout Builder" /> */}
    </>
  );
}
