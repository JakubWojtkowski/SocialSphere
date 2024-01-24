import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import MainArea from "./MainArea/MainArea";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUserEmail } from "./features/user/userSlice";

function App() {
  const userEmail = useSelector(selectUserEmail);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<LoginPage />} />
        {userEmail !== "" && <Route path="/MainArea" element={<MainArea />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
