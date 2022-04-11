import React from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase.Config";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(app);

const RequiredAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequiredAuth;
