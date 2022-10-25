import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import styles from "./Post.module.css";
const SERVER = process.env.REACT_APP_SERVER_ADDRESS;

export default function Post() {
  const [post, setPost] = useState("");
  useEffect(() => {
    fetch(`${SERVER ? SERVER : "http://localhost:3001"}/01`)
      .then((res) => res.json())
      .then(({ post }) => setPost(post));
  }, []);
  return (
    <div className={styles.postContainer}>
      <Markdown children={post} />
    </div>
  );
}
