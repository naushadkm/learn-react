import { NonSecuredLayout } from "components/organisms/layouts/NonSecuredLayout";
import { Login } from "pages/login/Login";
import { Route, Routes } from "react-router-dom";

export const NonSecuredRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<NonSecuredLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Route>
    </Routes>
  );
};
