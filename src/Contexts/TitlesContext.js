import { createContext, useEffect, useState } from "react";

const SERVER = process.env.REACT_APP_SERVER_ADDRESS;

const titlesContext = createContext(null);
export { titlesContext };

export default function TitlesContext({ children }) {
  const [titles, setTitles] = useState([]);
  const [titlesLoading, setTitlesLoading] = useState(true);

  useEffect(() => {
    fetch(`${SERVER ? SERVER : "http://localhost:3001"}/titles`)
      .then((res) => res.json())
      .then((data) => {
        setTitles(data);
        setTitlesLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const titlesPayload = { titles, titlesLoading, setTitlesLoading };

  return (
    <titlesContext.Provider value={titlesPayload}>
      {children}{" "}
    </titlesContext.Provider>
  );
}
