import Markdown from "react-markdown";
import { useRef, useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./Post.module.css";

import SideNav from "./SideNav";
import Loader from "../Shared/Loader";

import { Button } from "react-bootstrap";

const SERVER = process.env.REACT_APP_SERVER_ADDRESS;

export default function Post() {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

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
    fetch(`${SERVER ? SERVER : "http://localhost:3001"}/${id}`)
      .then((res) => res.json())
      .then(({ title, post }) => {
        if (!title || !post) {
          navigate("/notfound");
          return;
        }
        setTitle(title);
        setPost(post);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, navigate]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.postPageContainer}>
      <div className={styles.postContainer} ref={pdfRef}>
        <div className="d-lg-flex justify-content-between flex-wrap">
          <Markdown children={title} />
          <Button
            variant="outline-dark"
            className="border readBtn"
            onClick={handleDownload}
          >
            Generate Pdf
          </Button>
        </div>
        <div className={styles.imgContainer}>
          <img src={`/${id}.png`} className="imgFluid" alt="" />
        </div>
        <div>
          <div>
            <Markdown children={post} />
          </div>
          <div className="d-flex justify-content-center my-5">
            <Link to={`/checkout/${id}`}>
              <Button className="border readBtn" variant="outline-dark">
                Get Premium Access
              </Button>
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
