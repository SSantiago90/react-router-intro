import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";

function Login() {
  const { username, setUsername } = useContext(UserContext);
  console.log("username del context:", username);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    /* login logic . . . */
    let userAuth = true;
    if (userAuth) console.log("login success!");
    console.log(evt.target);
    let userInputText = evt.target.elements[0].value;
    setUsername(userInputText);
  };

  return (
    <div>
      <h1>Login</h1>
      <small style={{ color: "#a7a7a7" }}>Usuario actual: {username}</small>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "0 auto",
          height: "220px",
          maxWidth: "320px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
