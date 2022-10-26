import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { titlesContext } from "../Contexts/TitlesContext";

import { Button } from "react-bootstrap";

import Pdf from "react-to-pdf";

import styles from "./SideNav.module.css";

export default function SideNav({ sendRef, id }) {
  const pdfButton = () => {
    if (id)
      return (
        <Pdf targetRef={sendRef} filename={`Reactify_Post_${id}.pdf`}>
          {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
        </Pdf>
      );
  };
  const titles = useContext(titlesContext);
  return (
    <div className={styles.sideNavContainer}>
      <h1>Topics</h1>
      <ol>
        {titles.map((item) => (
          <li key={item.id}>
            {" "}
            <NavLink to={`/post/${item.id}`}>{item.title}</NavLink>
          </li>
        ))}
      </ol>
      {pdfButton()}
    </div>
  );
}
