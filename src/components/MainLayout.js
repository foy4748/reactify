import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";

//For Context API purpose
import AuthContext from "../Contexts/AuthContext";

export default function MainLayout() {
  return (
    <>
      <AuthContext>
        <NavBar />
        <section className={styles.mainContainer}>
          <Outlet />
        </section>
      </AuthContext>
    </>
  );
}
