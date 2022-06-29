import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SortCountry from "../../components/SortCountry/SortCountry";
import "./Country.css";

const Country = () => {
  const params = useParams();
  console.log(params.code);

  const [covidData, setCovidData] = useState([]);

  async function CountryData() {
    const countryUrl = `https://corona-api.com/countries/${params.code}`;
    console.log(countryUrl);
    const { data } = await axios.get(countryUrl);

    setCovidData([
      data.data.timeline[0].new_confirmed,
      data.data.latest_data.confirmed,
      data.data.latest_data.recovered,
      data.data.today.deaths,
      data.data.latest_data.deaths,
      data.data.latest_data.critical,
    ]);

    console.log({ covidData });
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
