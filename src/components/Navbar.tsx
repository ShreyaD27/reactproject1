import { NavLink } from "react-router-dom";
import { NavWrapper, NavList, NavButton } from "../styles/GlobalStyles";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/details", name: "Details" },
  { path: "/saved", name: "Saved" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mobile-header">
        <div className="hamburger" onClick={() => setOpen(true)}>
          ☰
        </div>
      </div>

      <MobileSidebar isOpen={open} onClose={() => setOpen(false)} />

      <NavWrapper className="desktop-menu">
        <NavList>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {({ isActive }) => (
                <NavButton $active={isActive}>{item.name}</NavButton>
              )}
            </NavLink>
          ))}
        </NavList>
      </NavWrapper>
    </>
  );
};

export default Navbar;