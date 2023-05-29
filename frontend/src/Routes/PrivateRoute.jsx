import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const token = useSelector((store) => {
    return store.LoginReducer.token;
  });
  return !token ? <Navigate to="/login" /> : children;
}