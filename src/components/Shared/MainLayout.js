import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { useState } from "react";

//For Context API purpose
import AuthContext from "../../Contexts/AuthContext";
import TitlesContext from "../../Contexts/TitlesContext";

export default function MainLayout() {
  const [darkActive, setDarkActive] = useState(false);

  return (
    <>
      <AuthContext>
        <NavBar darkActive={darkActive} setDarkActive={setDarkActive} />
        <TitlesContext>
          <section
            className={`${styles.mainContainer} ${
              darkActive ? styles.darkTheme : ""
            } `}
          >
            <Outlet />
          </section>
        </TitlesContext>
      </AuthContext>
    </>
  );
}
