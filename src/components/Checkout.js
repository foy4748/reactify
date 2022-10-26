import { useParams } from "react-router-dom";

export default function Checkout() {
  const { id } = useParams();
  return <h1>I'm Private {id}</h1>;
}
