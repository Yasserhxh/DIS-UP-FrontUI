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

      {/* Gestion d'arrivage */}
      <AsideMenuItemWithSub
        to="#"
        icon="shield-tick"
        title="Gestion d'arrivage "
        isCollapsed={isCollapsed}
      >
        {/* <AsideMenuItem
          to="/planning"
          title="Planning d’arrivage"
          isCollapsed={isCollapsed}
        /> */}
        <AsideMenuItem
          to="/add-arrivage"
          title="Création d'arrivage"
          isCollapsed={isCollapsed}
        />
        <AsideMenuItem
          to="/arrivage"
          title="Liste des arrivages"
          isCollapsed={isCollapsed}
        />
      </AsideMenuItemWithSub>

      {/* Pont à bascule  */}
      <AsideMenuItemWithSub
        to="#"
        icon="shield-tick"
        title="Pont à bascule "
        isCollapsed={isCollapsed}
      >
        <AsideMenuItem
          to="/shifts"
          title="Gestion des shifts "
          isCollapsed={isCollapsed}
        />
        <AsideMenuItem 
          to="/pesage" 
          title="Pesage" 
          isCollapsed={isCollapsed} 
        />
        <AsideMenuItem
          to="/parametrage"
          title="Parametrage"
          isCollapsed={isCollapsed}
        />
      </AsideMenuItemWithSub>

      {/* <AsideMenuItem
        to="/dashboard"
        icon="element-11"
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
      /> */}
      {/* <AsideMenuItem to="/builder" icon="switch" title="Layout Builder" /> */}
 
    </>
  );
}
