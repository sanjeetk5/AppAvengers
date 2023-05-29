import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import Addnotes from "../Pages/Addnotes";
import SingleNote from "../Components/SingleNote";
import EditRoute from "../Components/EditRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route path="/notes" element= {
        <PrivateRoute>
          <Addnotes/>
        </PrivateRoute>
      }/>
      <Route
        path="/dashboard/:id"
        element={
          <PrivateRoute>
            <SingleNote/>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/edit/:id"
        element={
          <PrivateRoute>
            <EditRoute/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
