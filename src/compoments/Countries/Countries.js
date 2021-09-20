import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setContries] = useState([])

useEffect( () =>{

    fetch('https://restcountries.eu/rest/v2/all')
     .then(res =>res.json())
    .then(data =>setContries (data))

} , [])

    return (
        <div>
            <h1> hello from countries:{countries.length} </h1>
           <div className = 'country-continer'>

           {
               countries.map(country => <Country 
                key = {country.capital}
                country = {country}
               
                 >

                </Country>) 
            }


           </div>
        </div>
    );
};

export default Countries;