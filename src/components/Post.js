import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

import SideNav from "./SideNav";
const SERVER = process.env.REACT_APP_SERVER_ADDRESS;

export default function Post() {
  const [post, setPost] = useState("");
  const { id } = useParams();
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
        <Markdown children={post} />
      </div>
      <div>
        <SideNav />
      </div>
    </div>
  );
}
