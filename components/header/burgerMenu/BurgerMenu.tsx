import React from "react";

import "./burgerMenu.scss";

interface BurgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<BurgerProps> = ({ open, setOpen }) => {
  return (
    <div className="burger" role="button" onClick={() => setOpen(!open)}>
      {open}
      <div className={open ? "burger__line --active" : "burger__line"}></div>
      <div className={open ? "burger__line --active" : "burger__line"}></div>
      <div className={open ? "burger__line --active" : "burger__line"}></div>
    </div>
  );
};
