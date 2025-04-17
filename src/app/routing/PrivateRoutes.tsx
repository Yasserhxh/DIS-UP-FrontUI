import { FC, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
 
import Fournisseur from "../modules/gestion_des_referenciels/fournisseur/list/Fournisseur";
import AddFournisseur from "../modules/gestion_des_referenciels/fournisseur/add/AddFournisseur";
import DetailsFournisseur from "../modules/gestion_des_referenciels/fournisseur/details/DetailsFournisseur";
import Arrivage from "../modules/arrivages/Arrivage";
import AddArrivage from "../modules/arrivages/AddArrivage";
import Consultation from "../modules/arrivages/Consultation";
import Paiement from "../modules/arrivages/Paiement ";
import Logistique from "../modules/arrivages/Logistique";
import GestionShifts from "../modules/pont-bascule/gestion-des-shifts/GestionShifts";
import Pesage from "../modules/pont-bascule/pesage/Pesage";
import Parametrage from "../modules/pont-bascule/parametrage/Parametrage";
 
 

 

/* Import Fournisseur Start */

/* Import Fournisseur End */

/* Import Pays End */

const PrivateRoutes = () => {
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));
  const WidgetsPage = lazy(() => import("../modules/widgets/WidgetsPage"));
  const ChatPage = lazy(() => import("../modules/apps/chat/ChatPage"));
  const UsersPage = lazy(
    () => import("../modules/apps/user-management/UsersPage")
  );

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/arrivage" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
 
        {/* <Route
          path="builder"
          element={
            <SuspensedView>
              <BuilderPageWrapper />
            </SuspensedView>
          }
        /> */}
        {/* <Route path="menu-test" element={<MenuTestPage />} /> */}

        <Route path="menu-test" element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route path="menu-test" element={<MenuTestPage />} />
 
        
        



        
         

        <Route path='menu-test' element={<MenuTestPage />} />
        
 

        <Route
          path="crafted/widgets/*"
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
 
        />
 
 
 
        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
 
        />
 
        <Route
          path="apps/chat/*"
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
 

        <Route
          path="apps/user-management/*"
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />

        {/*BEGIN Fourniseur Routes*/}
        <Route
          path="fournisseurs"
          element={
            <SuspensedView>
              <Fournisseur />
            </SuspensedView>
          }
        />
        <Route
          path="add-fournisseur"
          element={
            <SuspensedView>
              <AddFournisseur />
            </SuspensedView>
          }
        />
 
 
        <Route
          path="details-fournisseur/:id"
          element={
            <SuspensedView>
              <DetailsFournisseur />
            </SuspensedView>
          }
        />
        <Route
          path="details-fournisseur/:id/edit"
          element={
            <SuspensedView>
              <DetailsFournisseur />
            </SuspensedView>
          }
        />
        

        {/*END Fourniseur Routes*/}

        {/* Begin Arrivage */}
        <Route
          path="arrivage"
          element={
            <SuspensedView>
              <Arrivage />
            </SuspensedView>
          }
        />
        {/* <Route
          path="planning"
          element={
            <SuspensedView>
              <Planning />
            </SuspensedView>
          }
        /> */}
        <Route
          path="add-arrivage"
          element={
            <SuspensedView>
              <AddArrivage />
            </SuspensedView>
          }
        />
        <Route
          path="/consultation/:id"
          element={
            <SuspensedView>
              <Consultation />
            </SuspensedView>
          }
        />
        <Route
          path="/paiement/:id"
          element={
            <SuspensedView>
              <Paiement />
            </SuspensedView>
          }
        />
        <Route
          path="/logistique/:id"
          element={
            <SuspensedView>
              <Logistique />
            </SuspensedView>
          }
        />
        {/* End Arrivage */}

        {/* Begin Pont bascule */}
        <Route
          path="shifts"
          element={
            <SuspensedView>
              <GestionShifts />
            </SuspensedView>
          }
        />
        <Route
          path="pesage"
          element={
            <SuspensedView>
              <Pesage />
            </SuspensedView>
          }
        />
        <Route
          path="parametrage"
          element={
            <SuspensedView>
              <Parametrage />
            </SuspensedView>
          }
        />
        {/* End Pont bascule */}

        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
