import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flag,capital, population} = props.country
    return (
        <div className= "country">
            <h1>this is : {name}</h1>
            <img src={flag} alt="" />
            <p> capital:{capital}</p>

        </div>
    );
};

export default Country;