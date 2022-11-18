import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export default function CupcakeList() {
  // Step 1: get all cupcakes

  const [cupcackes, setCupcakes] = useState([]);

  const fetchCupcakes = async () => {
    await axios
      .get("http://localhost:4000/cupcakes")
      .then((result) => setCupcakes(result.data));
  };

  useEffect(() => {
    fetchCupcakes();
  }, []);

  // Step 3: get all accessories

  const [accessories, setAccessories] = useState([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  const fetchAccessories = async () => {
    await axios
      .get("http://localhost:4000/accessories")
      .then((result) => setAccessories(result.data));
  };

  useEffect(() => {
    fetchAccessories();
  }, []);

  const handleChange = (event) => {
    setSelectedAccessory(event.target.value);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">No accessory...</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcackes
          .filter((cupcake) =>
            selectedAccessory !== ""
              ? cupcake.accessory_id === selectedAccessory
              : cupcake
          )
          .map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Link to={`/cupcakes/${cupcake.id}`}>
                <Cupcake cupcake={cupcake} />
              </Link>
            </li>
          ))}

        {/* end of block */}
      </ul>
    </>
  );
}
