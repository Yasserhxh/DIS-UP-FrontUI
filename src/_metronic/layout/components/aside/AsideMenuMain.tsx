import { useIntl } from "react-intl";
import { KTIcon } from "../../../helpers";
import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";


interface AsideMenuMainProps {
  isCollapsed?: boolean;
}

export function AsideMenuMain({ isCollapsed = false }: AsideMenuMainProps) {
  const intl = useIntl();

  return (
    <>  
    {/* <AsideMenuItem
        to="/dashboard"
        icon="element-11"
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
      /> */}      
      <AsideMenuItemWithSub
        to="#"
        icon="shield-tick"
        title="Gestion des référentiels"
        isCollapsed={isCollapsed}
      >
        <AsideMenuItemWithSub
          to="#"
          icon="shield-tick"
          title="Gestion des Fournisseurs"
          isCollapsed={isCollapsed}
        >
        <AsideMenuItem
          to="/addFournisseur"
          icon="plus"
          title="Création d'un Fournisseur"
          isCollapsed={isCollapsed}
        />
        <AsideMenuItem
          to="/liste_fournisseurs"
          icon="list"
          title="Liste des fournisseurs"
          isCollapsed={isCollapsed}
        />
        </AsideMenuItemWithSub>
      
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to="#"
        icon="shield-tick"
        title="Gestion d'arrivage "
        isCollapsed={isCollapsed}
      >
        <AsideMenuItem
          to="/planning"
          title="Planning d’arrivage"
          isCollapsed={isCollapsed}
        />
        <AsideMenuItem
          to="/addarrivage"
          title="Création d'arrivage"
          isCollapsed={isCollapsed}
        />
        <AsideMenuItem
          to="/arrivage"
          title="Liste des arrivages"
          isCollapsed={isCollapsed}
        />
      </AsideMenuItemWithSub>
    </>
  );
}

