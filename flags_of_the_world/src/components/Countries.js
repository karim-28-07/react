import React, { useEffect, useState } from "react"
import axios from 'axios';
import Card from "./Card";

const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData, setsortedData] = useState([]);
    const [playOnce, setplayOnce] = useState(true)
    const [rangeValue, setrangeValue] = useState(40)
    const [selectedRadio, setselectedRadio] = useState("")
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"]

    useEffect(() => {

        if (playOnce) {

            axios.get('http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag'
            )
                .then((res) => {
                    setData(res.data);
                    setplayOnce(false)
                });
        }

        const sortedCountry = () => {


            const countryObj = Object.keys(data).map((i) => data[i])
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population
            })
            sortedArray.length = rangeValue
            setsortedData(sortedArray)
        }

        sortedCountry()


    }, [data, rangeValue]);

    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="250" value={rangeValue}
                    onChange={(e) => setrangeValue(e.target.value)} />
                <ul>

                    {radios.map((radio) => {
                        return (
                            <li key={radio}>
                               <input type="radio" value={radio} id={radio} 
                               checked ={radio===selectedRadio} 
                               onChange = {(e)=>setselectedRadio(e.target.value)} />
                               <label htmlFor={radio}>{radio}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="cancel">
                {selectedRadio &&(<h5 onClick={()=>setselectedRadio("")} >
                    Annuler recherche</h5>
                    )}


            </div>
            <ul className="countries-list">
                {sortedData
                    .filter((country)=>country.region.includes
                    (selectedRadio))
                    .map((country) => (
                    <Card country={country} key={country.name} />
                ))}


            </ul>



        </div>

    );

};

export default Countries;