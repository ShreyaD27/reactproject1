import { NavLink } from "react-router-dom";
import { NavWrapper, NavList, NavButton } from "../styles/GlobalStyles";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

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
          <NavLink to="/">
            {({ isActive }) => (
              <NavButton $active={isActive}>Home</NavButton>
            )}
          </NavLink>

          <NavLink to="/details">
            {({ isActive }) => (
              <NavButton $active={isActive}>Details</NavButton>
            )}
          </NavLink>

          <NavLink to="/saved">
            {({ isActive }) => (
              <NavButton $active={isActive}>Saved</NavButton>
            )}
          </NavLink>
        </NavList>
      </NavWrapper>
    </>
  );
};

export default Navbar;