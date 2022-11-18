import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export default function CupcakeDetails() {
  const { id } = useParams();
  const [cupcake, setCupcake] = useState();

  const fetchCupcake = async () => {
    await axios
      .get(`http://localhost:4000/cupcakes/${id}`)
      .then((result) => setCupcake(result.data));
  };

  useEffect(() => fetchCupcake(), []);

  return (
    <>
      <h1>Cupcake details</h1>
      <div>
        <Cupcake cupcake={cupcake} />
      </div>
    </>
  );
}
