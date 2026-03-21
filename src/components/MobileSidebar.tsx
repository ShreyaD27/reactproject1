import { NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileSidebar = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div style={overlay} onClick={onClose}>
      <div style={sidebar} onClick={(e) => e.stopPropagation()}>
        <NavLink to="/" onClick={onClose}>
          <p style={link}>Home</p>
        </NavLink>

        <NavLink to="/details" onClick={onClose}>
          <p style={link}>Details</p>
        </NavLink>

        <NavLink to="/saved" onClick={onClose}>
          <p style={link}>Saved</p>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileSidebar;

const overlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.3)",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "60px 0 0 10px",  // push down below hamburger
  zIndex: 999,
};

const sidebar: React.CSSProperties = {
  width: "150px",           // SMALL width
  background: "#fff",
  borderRadius: "10px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const link: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#111827",
};