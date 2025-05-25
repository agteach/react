import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import Signup from "./Component/Signup";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {showLogin ? <Login /> : <Signup />}
        <div className="text-center mt-3">
          <button className="btn btn-link" onClick={toggleForm}>
            {showLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

