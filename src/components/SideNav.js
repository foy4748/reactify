import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./SideNav.module.css";

const SERVER = process.env.REACT_APP_SERVER_ADDRESS;

export default function SideNav() {
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    fetch(`${SERVER ? SERVER : "http://localhost:3001"}/titles`)
      .then((res) => res.json())
      .then((data) => setTitles(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className={styles.sideNavContainer}>
      <h1>Topics</h1>
      <ol>
        {titles.map((item) => (
          <li>
            {" "}
            <NavLink to={`/post/${item.id}`}>{item.title}</NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
}
