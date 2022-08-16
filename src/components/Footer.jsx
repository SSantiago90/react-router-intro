import React from "react";

import { useContext } from "react";
import { UserContext } from "../App";

function Footer() {
  const { username } = useContext(UserContext);
  return (
    <>
      <footer>
        <h1>Footer</h1>
        <p>Usuario: {username}</p>
      </footer>
    </>
  );
}

export default Footer;
