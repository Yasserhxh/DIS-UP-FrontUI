import { FC, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import BuilderPageWrapper from "../pages/layout-builder/BuilderPageWrapper";
import Arrivage from "../modules/arrivages/Arrivage";
import AddArrivage from "../modules/arrivages/AddArrivage";
import Consultation from "../modules/arrivages/Consultation";
import Paiement from "../modules/arrivages/Paiement ";
import Logistique from "../modules/arrivages/Logistique";

/* Import Fournisseur Start */
import FournisseurPage from "../modules/gestion_des_referenciels/fournisseur/list/Fournisseur";
import AddFournisseurPage from "../modules/gestion_des_referenciels/fournisseur/add/AddFournisseur";
import DetailsFournisseurPage from "../modules/gestion_des_referenciels/fournisseur/details/DetailsFournisseur";
/* Import Fournisseur End */


/* Import Pays End */
        


const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import("../modules/profile/ProfilePage"));
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
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
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
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

        {/* Route To Fournisseur Start */}    
        <Route
          path='liste_fournisseurs'
          element={
            <SuspensedView>
              <FournisseurPage/>
            </SuspensedView>
          }
        />
        <Route
          path='addFournisseur'
          element={
            <SuspensedView>
              <AddFournisseurPage/>
            </SuspensedView>
          }
        />  
        <Route
          path='details_fournisseurs/:id'
          element={
            <SuspensedView>
              <DetailsFournisseurPage/>
            </SuspensedView>
          }
        />
        <Route
          path='details_fournisseurs/:id/edit'
          element={
            <SuspensedView>
              <DetailsFournisseurPage/>
            </SuspensedView>
          }
        />
        {/* Route To Fournisseur End */} 


        
         

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

        <Route
          path="arrivage"
          element={
            <SuspensedView>
              <Arrivage />
            </SuspensedView>
          }
        />
        <Route
          path="addarrivage"
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
