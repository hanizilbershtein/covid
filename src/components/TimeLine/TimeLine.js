import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TimeLine.css";

const TimeLine = () => {
  const [dataTimeLine, setDataTimeLine] = useState([]);

  async function fetchDataTimeline() {
    const countryUrl = `https://corona-api.com/timeline`;
    const { data } = await axios.get(countryUrl);
    const timeline = data.data[0];
    setDataTimeLine([
      timeline.confirmed.toLocaleString(),
      timeline.deaths.toLocaleString(),
      timeline.active.toLocaleString(),
      timeline.new_confirmed.toLocaleString(),
      timeline.new_deaths.toLocaleString(),
    ]);
  }

  useEffect(() => {
    fetchDataTimeline();
  }, []);

  return (
    <div className="timeline">
      <h1>covid-19 coronavirus tracker</h1>

      <div className="total">
        <b>TOTAL CASES</b> <br />
        <br />
        {dataTimeLine[0]}
      </div>
      <div>
        <b>DEATHS</b> <br />
        <br />
        {dataTimeLine[1]}
      </div>

      <div>
        <b>RECOVERED</b> <br />
        <br />
        {dataTimeLine[2]}
      </div>
      <div>
        <b>NEW CASES</b> <br />
        <br />
        {dataTimeLine[3]}
      </div>
      <div>
        <b>NEU DEATHS</b> <br />
        <br />
        {dataTimeLine[4]}
      </div>
    </div>
  );
};

export default TimeLine;
