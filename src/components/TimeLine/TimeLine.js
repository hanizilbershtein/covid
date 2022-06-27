import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './TimeLine.css'

const TimeLine = () => {

    const [dataTimeLine,setDataTimeLine] = useState([])
    
    async function fetchDataTimeline(){
        const countryUrl=`https://corona-api.com/timeline`
       // if(country==="") return;
        const {data}= await axios.get(countryUrl)
        //console.log(data);
        const timeline=data.data[0]
        setDataTimeLine([
            timeline.confirmed,
            timeline.deaths,
            timeline.active,
            timeline.new_confirmed,
            timeline.new_deaths
        ])
      
        console.log({dataTimeLine});
        

    }

    useEffect(()=>{
        fetchDataTimeline()

    },[])



/*function numberWithCommas(x) {
    return (isString(x) ? x : x?.toString())?.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
  }*/

  return (
      <div className='timeline'>
    <h1>covid-19 coronavirus tracker</h1>

    <div className='total'>
        <b>TOTAL CASES</b> <br/><br/>
        {dataTimeLine[0]}
    </div>
    <div>
        <b>DEATHS</b> <br/><br/>
        {dataTimeLine[1]}
    </div>

    <div>
        <b>RECOVERED</b> <br/><br/>
        {dataTimeLine[2]}
    </div>
    <div>
        <b>NEW CASES</b> <br/><br/>
        {dataTimeLine[3]}
    </div>
    <div>
        <b>NEU DEATHS</b> <br/><br/>
        {dataTimeLine[4]}
    </div>

    </div>
  )
}

export default TimeLine