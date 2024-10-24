import React, { useState } from "react";
import Login from "./components/Login";
import Registration from "./components/Registration";

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="app-container">
      {isRegistered ? (
        <Login setIsRegistered={setIsRegistered} />
      ) : (
        <Registration setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
};

export default App;
