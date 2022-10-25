import { createContext, useEffect, useState } from "react";

const SERVER = process.env.REACT_APP_SERVER_ADDRESS;

const titlesContext = createContext(null);
export { titlesContext };

export default function TitlesContext({ children }) {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch(`${SERVER ? SERVER : "http://localhost:3001"}/titles`)
      .then((res) => res.json())
      .then((data) => setTitles(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <titlesContext.Provider value={titles}>{children} </titlesContext.Provider>
  );
}
