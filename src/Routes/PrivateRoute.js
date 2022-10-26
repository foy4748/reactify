import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase.config.js";
import Loader from "../components/Shared/Loader";

import { useLocation, Navigate } from "react-router-dom";

import { userContext } from "../Contexts/AuthContext";
import { useContext } from "react";
const auth = getAuth(firebaseApp);

export default function PrivateRoute({ children }) {
  const activeUser = auth.currentUser;
  const location = useLocation();
  const { authLoading: Loading } = useContext(userContext);

  if (Loading) {
    return (
      <div>
        <Loader />{" "}
      </div>
    );
  }
  if (activeUser) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}
