import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SortCountry.css";
import { useNavigate } from "react-router-dom";

const SortCountry = () => {
  const navigate = useNavigate();

  const [SortDeaths, setSortDeaths] = useState([]);
  const [sortConfirmed, setSortConfirmed] = useState([]);
  const [sortdeathToday, setSortdeathToday] = useState([]);
  const [sortConfirmToday, setSortConfirmToday] = useState([]);
  async function fetchSort() {
    const countryUrl = `https://corona-api.com/countries`;
    // if(country==="") return;
    const { data } = await axios.get(countryUrl);
    setSortDeaths(
      data.data.map((el) => ({
        code: el.code,
        name: el.name,
        deaths: el.latest_data.deaths,
      }))
    );

    setSortConfirmed(
      data.data.map((el) => ({
        code: el.code,
        name: el.name,
        confirmed: el.latest_data.confirmed,
      }))
    );
    setSortdeathToday(
      data.data.map((el) => ({
        code: el.code,
        name: el.name,
        deaths: el.today.deaths,
      }))
    );
    setSortConfirmToday(
      data.data.map((el) => ({
        code: el.code,
        name: el.name,
        confirmed: el.today.confirmed,
      }))
    );
  }

  function sortdeath(a, b) {
    var deathsa = a.deaths;
    var deathsb = b.deaths;
    return deathsa < deathsb ? 1 : -1;
  }

  function sortConfirme(a, b) {
    var confirmeda = a.confirmed;
    var confirmedb = b.confirmed;
    return confirmeda < confirmedb ? 1 : -1;
  }

  SortDeaths.sort(sortdeath);
  sortConfirmed.sort(sortConfirme);
  sortdeathToday.sort(sortdeath);
  sortConfirmToday.sort(sortConfirme);

  let SortDeaths5 = SortDeaths.slice(0, 5);
  let sortConfirmed5 = sortConfirmed.slice(0, 5);
  let sortdeathToday5 = sortdeathToday.slice(0, 5);
  let sortConfirmToday5 = sortConfirmToday.slice(0, 5);

  useEffect(() => {
    fetchSort();
  }, []);

  return (
    <div className="most">
      <div>
        <h2>Most Deaths - All Time</h2>
        <ol>
          {SortDeaths5.map((el) => (
            <li onClick={() => navigate(`../country/${el.name}/${el.code}`)}>
              {el.name}
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h2>Most Confirmed - All Time</h2>
        <ol>
          {sortConfirmed5.map((el) => (
            <li onClick={() => navigate(`../country/${el.name}/${el.code}`)}>
              {el.name}
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h2>Most Deaths - Today</h2>
        <ol>
          {sortdeathToday5.map((el) => (
            <li onClick={() => navigate(`../country/${el.name}/${el.code}`)}>
              {el.name}
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h2>Most Confirmed - Today</h2>
        <ol>
          {sortConfirmToday5.map((el) => (
            <li onClick={() => navigate(`../country/${el.name}/${el.code}`)}>
              {el.name}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SortCountry;
