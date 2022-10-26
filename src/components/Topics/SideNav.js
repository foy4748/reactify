import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { titlesContext } from "../../Contexts/TitlesContext";

import styles from "./SideNav.module.css";

import Loader from "../Shared/Loader";

export default function SideNav() {
  const { titles, titlesLoading } = useContext(titlesContext);
  if (titlesLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.sideNavContainer}>
      <h1>Topics</h1>
      <ol>
        {titles.map((item) => (
          <li key={item.id}>
            <NavLink to={`/post/${item.id}`}>{item.title}</NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
}
