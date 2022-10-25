import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <ol style={{ marginTop: "7rem", position: "sticky", top: "7rem" }}>
      {titles.map((item) => (
        <li>
          {" "}
          <Link to={`/post/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ol>
  );
}
