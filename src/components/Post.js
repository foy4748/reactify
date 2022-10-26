import Markdown from "react-markdown";
import { useRef, useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { useParams, Link } from "react-router-dom";
import styles from "./Post.module.css";

import SideNav from "./SideNav";
import Loader from "./Loader";

import { Button } from "react-bootstrap";

const SERVER = process.env.REACT_APP_SERVER_ADDRESS;

export default function Post() {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const pdfRef = useRef(null);

  const handleDownload = () => {
    const content = pdfRef.current;

    const doc = new jsPDF("p", "pt", "a4");
    doc.html(content, {
      callback: function (doc) {
        doc.save(`Reactify_Post_${id}.pdf`);
      },
    });
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    fetch(`${SERVER ? SERVER : "http://localhost:3001"}/${id}`)
      .then((res) => res.json())
      .then(({ title, post }) => {
        setTitle(title);
        setPost(post);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.postPageContainer}>
      <div className={styles.postContainer} ref={pdfRef}>
        <div className="d-lg-flex justify-content-between flex-wrap">
          <Markdown children={title} />
          <Button onClick={handleDownload}>Generate Pdf</Button>
        </div>
        <div className={styles.imgContainer}>
          <img src={`/${id}.png`} className="imgFluid" alt="" />
        </div>
        <div>
          <div>
            <Markdown children={post} />
          </div>
          <div className="d-flex justify-content-center my-5">
            <Link className="btn btn-primary" to={`/checkout/${id}`}>
              {" "}
              Get Premium Access
            </Link>
          </div>
        </div>
      </div>
      <div>
        <SideNav />
      </div>
    </div>
  );
}
