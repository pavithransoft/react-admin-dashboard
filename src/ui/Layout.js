import { Outlet } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
import Navigation from "./Navigation";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section
      className={`w-screen h-screen grid grid-cols-${
        !openMenu ? "[280px_1fr]" : "[80px_1fr]"
      } duration-500 gap-2`}
    >
      <Menu onOpenMenu={openMenu} onHandleMenu={handleMenu} />
      <div className="grid grid-rows-[80px_1fr] gap-2">
        <Navigation />
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
