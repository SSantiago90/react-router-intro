import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div
        style={{
          paddingTop: "15px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/detalle/1">Detalle 1</NavLink>
        <NavLink to="/detalle/2">Detalle 2</NavLink>
        <NavLink to="/detalle/3">Detalle 3</NavLink>
        <NavLink to="/detalle/4">Detalle 4</NavLink>
        <NavLink
          style={{
            border: "solid 1px #0070f3",
            padding: "10px",
            borderRadius: "5px",
          }}
          to="/login"
        >
          Login
        </NavLink>
      </div>
      <hr />
    </nav>
  );
}

export default NavBar;
