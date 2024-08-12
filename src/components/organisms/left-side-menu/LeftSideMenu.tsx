import { Link } from "react-router-dom";

export const LeftSideMenu = () => {
  return (
    <>
      <p>
        <Link to={"/app/home"}>Home</Link>
      </p>
      <p>
        <Link to={"/app/contact-us"}>Contact Us</Link>
      </p>
      <p>
        <Link to={"/login"}>Login</Link>
      </p>
      <p>
        <Link to={"/"}>Logout</Link>
      </p>
    </>
  );
};
