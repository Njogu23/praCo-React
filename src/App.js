import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import HomePage from "./pages/HomePage";
import AuthToggle from "./components/AuthToggle";
import PrivateRoute from "./pages/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {

  return (
    <AuthProvider>
        <Routes>
          <Route path="*" element={<PrivateRoute component={HomePage} />} />
          <Route path="/signin" element={<AuthToggle />}/>
        </Routes>
        <ToastContainer />
    </AuthProvider>
  );
};

export default App;
