import { Routes, Route } from "react-router-dom";
import { NonSecuredRoutes } from "./NonSecuredRoutes";
import { SecuredRoutes } from "./SecuredRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<NonSecuredRoutes />} />
      <Route path="/app/*" element={<SecuredRoutes />} />
    </Routes>
  );
};
