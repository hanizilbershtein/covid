import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Country.css";

const Country = () => {
  const params = useParams();

  const [covidData, setCovidData] = useState([]);

  async function CountryData() {
    const countryUrl = `https://corona-api.com/countries/${params.code}`;
    const { data } = await axios.get(countryUrl);

    setCovidData([
      data.data.timeline[0].new_confirmed.toLocaleString(),
      data.data.latest_data.confirmed.toLocaleString(),
      data.data.latest_data.recovered.toLocaleString(),
      data.data.today.deaths.toLocaleString(),
      data.data.latest_data.deaths.toLocaleString(),
      data.data.latest_data.critical.toLocaleString(),
    ]);
  }

  useEffect(() => {
    CountryData();
  }, []);

  return (
    <div>
      <h1>{params.name}</h1>

      <div className="covid">
        <div>
          <b>active:</b>
          {covidData[0]}
          <b>cases:</b>
          {covidData[1]}
          <b>recovered:</b>
          {covidData[2]}
          <b>today:</b>
          {covidData[3]}
          <b>deaths:</b>
          {covidData[4]}
          <b>critical:</b>
          {covidData[5]}
        </div>
      </div>
    </div>
  );
};

export default Country;
