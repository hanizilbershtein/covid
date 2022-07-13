import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListCountry = () => {
  const [country, setCountry] = useState([]);

  const navigate = useNavigate();

  async function fetchDataCountries() {
    const countryUrl = `https://corona-api.com/countries`;
    const { data } = await axios.get(countryUrl);
    setCountry(data.data.map((el) => `${el.name}: ${el.code} `));
  }

  return (
    <>
      <div>
        {
          <select
            onClick={fetchDataCountries}
            onChange={(e) => {
              const name = e.target.value.split(":")[0];
              const code = e.target.value.split(" ")[1];
              console.log(name, code);
              navigate(`../country/${name}/${code}`);
            }}
          >
            <option>serch country</option>

            {country.map((el) => (
              <option>{el}</option>
            ))}
          </select>
        }
      </div>
    </>
  );
};

export default ListCountry;
