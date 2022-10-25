import Markdown from "react-markdown";
import { createRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

import SideNav from "./SideNav";

const SERVER = process.env.REACT_APP_SERVER_ADDRESS;
const pdfRef = createRef();

export default function Post() {
  const [post, setPost] = useState("");
  const { id } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    fetch(`${SERVER ? SERVER : "http://localhost:3001"}/${id}`)
      .then((res) => res.json())
      .then(({ post }) => setPost(post))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className={styles.postPageContainer}>
      <div className={styles.postContainer}>
        <div className={styles.imgContainer}>
          <img src={`/${id}.png`} className="imgFluid" alt="" />
        </div>
        <div ref={pdfRef}>
          <Markdown children={post} />
        </div>
      </div>
      <div>
        <SideNav id={id} sendRef={pdfRef} />
      </div>
    </div>
  );
}
