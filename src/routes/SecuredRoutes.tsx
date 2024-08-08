import { SecuredLayout } from "components/organisms/layouts/SecuredLayout";
import { Home } from "pages/home/Home";
import { Route, Routes } from "react-router-dom";

export const SecuredRoutes = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<SecuredLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
