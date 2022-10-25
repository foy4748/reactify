import { createContext, useEffect, useState } from "react";
import firebaseApp from "../firebase.config";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const auth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider(auth);
const githubAuthProvider = new GithubAuthProvider(auth);

const userContext = createContext(null);
export { userContext };

export default function AuthContext({ children }) {
  const [activeUser, setActiveUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  //------------------------------
  useEffect(() => {
    const persist = onAuthStateChanged(auth, (user) => {
      setActiveUser(user);
      setAuthLoading(false);
    });

    return () => persist();
  }, []);

  // Auth Handling functions
  const loginHandler = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLoginHandler = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const githubLoginHandler = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, githubAuthProvider);
  };
  const registerHandler = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOutHandler = () => {
    return signOut(auth);
  };
  //------------------------------

  // PayLoad
  const contextPayLoad = {
    loginHandler,
    googleLoginHandler,
    githubLoginHandler,
    registerHandler,
    authLoading,
    activeUser,
    setActiveUser,
    logOutHandler,
  };
  //------------------------------
  return (
    <userContext.Provider value={contextPayLoad}>
      {children}
    </userContext.Provider>
  );
}
