import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import styles from "./Checkout.module.css";

import { useContext } from "react";
import { titlesContext } from "../../Contexts/TitlesContext";

export default function Checkout() {
  const { id } = useParams();
  const { titles } = useContext(titlesContext);
  console.log(titles);
  const title = titles.find((item) => item.id === id);
  return (
    <div className={styles.checkoutContainer}>
      <div className="text-center">
        <h1>{`#${id}. `}</h1>
        <h1>{title?.title}</h1>
        <p>Take consultations about this topic</p>
        <p>Meet our professionals to guide you in this topic</p>
        <div className="d-flex justify-content-around">
          <Button className="border readBtn" variant="outline-dark">
            Trial 1 hour
          </Button>
          <Button className="border readBtn" variant="outline-dark">
            {"$5.00"} per hour
          </Button>
        </div>
      </div>
    </div>
  );
}
