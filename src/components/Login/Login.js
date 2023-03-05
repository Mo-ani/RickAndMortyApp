import React, { useState } from "react";
import styles from './Login.module.scss'

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "crhistian" && password === "root123") {
      setLoggedIn(true);
    }else if(username === "" && password === ""){
        alert('Empty fields')
    }else{
        alert('Invalid Username or Password')
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
          <form onSubmit={handleLogin} className="d-flex flex-column gap-4 justify-content-center">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
               />
            </div>
            <div className="form-group" >
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
                <button type="submit" className={`btn ${styles.login} text-white`}>
                Login
                </button>
          </form>
        </div>
      </div>
    </div>
);
};

export default Login;