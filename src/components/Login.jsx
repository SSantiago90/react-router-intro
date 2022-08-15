import React from "react";

function Login() {
  const [user, setUser] = React.useState("anonymous");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    /* login logic . . . */
    let userAuth = true;
    if (userAuth) console.log("login success!");
    console.log(evt.target);
    let userInputText = evt.target.elements[0].value;
    setUser(userInputText);
  };

  return (
    <div>
      <h1>Login</h1>
      <small style={{ color: "#a7a7a7" }}>Usuario actual: {user}</small>
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
