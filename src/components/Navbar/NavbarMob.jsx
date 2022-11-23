import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import MobileNavBar from "./MobileNavBar";

const NavbarMob = () => {
  const [open, setOpen] = useState(false);
  const openBtn = (
    <AiOutlineMenu
      className="openBtn"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeBtn = (
    <AiOutlineClose
      className="openBtn"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className="mobile-nav">
      {open ? closeBtn : openBtn}
      {open && (
        <MobileNavBar isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </nav>
  );
};

export default NavbarMob;
