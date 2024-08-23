import { useState } from "react";

const Selection=({data})=>{
    const [selectedCountry,setSelectedCountry]=useState("");
    const [selectedState,setSelectedState]=useState("");
    const [selectedCity,setSelectedCity]=useState("");

    const allcountries=Object.keys(data.countries);
    const allStates=Object.keys(data.states).filter(
        (state)=> data.states[state].country === selectedCountry
    )
    const allCities=Object.keys(data.cities).filter(
        (city)=> data.cities[city].country === selectedCountry &&
        data.cities[city].state === selectedState
    )

    const handleCountryChange=(e)=>{
        setSelectedCountry(e.target.value);
    }

    const handleStateChange=(e)=>{
        setSelectedState(e.target.value);
    }

    const handleCityChange=(e)=>{
        setSelectedCity(e.target.value);
    }
    return (
        <div>
           <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="" hidden>Select Country</option>
            {
                allcountries.map((country)=>(
                    <option 
                    key={country} 
                    value={country}>
                        {country}
                    </option>
                ))
            }
           </select>

           <select 
           value={selectedState} 
           onChange={handleStateChange}>
            <option value="" hidden>Select State</option>
            {
                allStates.map((state)=>(
                    <option 
                    key={state} 
                    value={state}>
                        {state}
                    </option>
                ))
            }
           </select>

           <select 
            value={selectedCity} 
            onChange={handleCityChange}>
            <option value="" hidden>Select City</option>
            {
                allCities.map((city)=>(
                    <option 
                    key={city} 
                    value={city}>
                        {city}
                    </option>
                ))
            }
           </select>
        </div>
    )
}

export default Selection;