import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";

//For Context API purpose
import AuthContext from "../Contexts/AuthContext";
import TitlesContext from "../Contexts/TitlesContext";

export default function MainLayout() {
  return (
    <>
      <AuthContext>
        <NavBar />
        <TitlesContext>
          <section className={styles.mainContainer}>
            <Outlet />
          </section>
        </TitlesContext>
      </AuthContext>
    </>
  );
}
