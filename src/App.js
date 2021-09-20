import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './compoments/Countries/Countries';

function App() {
  return (
    <div className="App">
<Countries></Countries>
     
    </div>
  );
}






// function Countries (){
// const [countries, setCountries] = useState([])
// useEffect( () => {
// fetch('https://restcountries.eu/rest/v2/all')
// .then(res =>res.json())
// .then(data => setCountries(data))
// },[])


// return(
// <div>
// <h2>Traveling around the world</h2>
// <h4>countries Available:{countries.length} </h4>

// {

// countries.map(country  => <Country name ={country.name} capital ={country.capital}></Country>)

// }
// </div>

// )



// }

// function Country(props){
// return(
// <div>
// <h2>name:{props.name}</h2>
// <p>capital :{props.capital}</p>

// </div>


// )

// }


export default App;
