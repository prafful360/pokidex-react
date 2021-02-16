import React from "react";

const Header = () => {
  return (
    <>
      <div className="nav-bar">
        <span>PokeDex</span>
        <span>
          <input className="input-dex" type="text" placeholder="Search" />
        </span>
      </div>
    </>
  );
};

export default Header;
