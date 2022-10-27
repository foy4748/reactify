import { NavLink, Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { titlesContext } from "../../Contexts/TitlesContext";

import styles from "./SideNav.module.css";

import Loader from "../Shared/Loader";

export default function SideNav() {
  const { titles, titlesLoading } = useContext(titlesContext);
  const { id } = useParams();
  if (titlesLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.sideNavContainer}>
      <h1>Topics</h1>
      <ol>
        {titles.map((item) => (
          <li key={item.id}>
            <NavLink
              to={`/post/${item.id}`}
              className={({ isActive }) => isActive && "activeClassName"}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ol>
      {id && (
        <Link to={`/checkout/${id}`}>
          <Button className="border readBtn" variant="outline-dark">
            Get Premium Access
          </Button>
        </Link>
      )}
    </div>
  );
}
