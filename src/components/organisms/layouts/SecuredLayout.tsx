import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { LeftSideMenu } from "../left-side-menu/LeftSideMenu";
import { RightSideMenu } from "../right-side-menu/RightSideMenu";
import { Footer } from "../footer/Footer";

export const SecuredLayout = () => {
  return (
    <>
      <Header></Header>

      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-2 sidenav">
            <LeftSideMenu></LeftSideMenu>
          </div>
          <div className="col-sm-8 text-left">
            <Outlet />
          </div>
          <div className="col-sm-2 sidenav">
            <RightSideMenu></RightSideMenu>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
