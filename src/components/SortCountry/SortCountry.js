import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SortCountry = () => {

    function sortRepose(a,b){
        var repoa = a.SortDeaths
        var repob = b.SortDeaths
        return (repoa< repob) ? 1:-1;
      }

    const [SortDeaths, setSortDeaths] = useState([])
    const [sortConfirmed, setSortConfirmed] = useState()

    async function fetchSort(){
        const countryUrl=`https://corona-api.com/countries`
       // if(country==="") return;
        const {data}= await axios.get(countryUrl)
        console.log(data);
        setSortDeaths(data.data.map((el)=>
           el.latest_data.deaths
        
        )) 
        setSortConfirmed(data.data.map((el)=>
        el.latest_data.confirmed

        ))
        
        console.log({SortDeaths},{sortConfirmed});

    }
    useEffect(()=>{
        fetchSort()}
        ,[] )
     //   SortDeaths.sort(sortRepose)  

  return (
    <button onClick={fetchSort}>SortCountry</button>
  )
}

export default SortCountry