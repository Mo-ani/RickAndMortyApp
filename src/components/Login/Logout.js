import React from "react";

const Logout = ({ setLoggedIn }) => {
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  return (
    <button className="btn text-danger" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;