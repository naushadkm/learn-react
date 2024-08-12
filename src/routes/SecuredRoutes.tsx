import { SecuredLayout } from "components/organisms/layouts/SecuredLayout";
import { ContactUs } from "pages/contact-us/ContactUs";
import { Home } from "pages/home/Home";
import { Route, Routes } from "react-router-dom";

export const SecuredRoutes = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<SecuredLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
