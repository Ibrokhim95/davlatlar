

import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CountriesContext } from '../App'

const Countries = () => {

    // const [countryy, setCountryy] = useState({})

    const [state, dispatch, country, setCountry] = useContext(CountriesContext)

    const home = document.getElementById("home")
    const about = document.getElementById("about")

    const aboutCountry = (item) => {
        const country = {
            commonName: item.name.common,
            region: item.region,
            subRegion: item.subregion,
            capital: item.capital,
            area: item.area,
            population: item.population,
            tld: item.tld[0],
            callingCode: item.idd.root,
            // nativeName: item.name.nativeName,
            cca2: item.cca2.toLowerCase()
        }
        setCountry(country)
        // dispatch({type: "COUNTRY", payload: country})
        about.classList.remove("hidden")
        about.classList.add("block")
        home.classList.add("hidden")
    }

    console.log(state.countries[0]);

    return (
        <div className='p-[30px]'>
            {/* <div className="bg-white/75 w-[100%] h-[100%] absolute"></div> */}

            <div className='grid grid-cols-2 gap-[40px]'>
                {state.countries.map((item, index) => (
                    <div onClick={() => aboutCountry(item)} key={index} className='border border-slate-300 rounded-md shadow-xl overflow-hidden'>
                        <div className="flag">
                            <img className='h-[100%] w-[100%]' src={item.flags.png} alt="" />
                        </div>

                        <div className='p-5'>
                            <p className='text-[16px] font-bold py-1 mb-2'>{item.name.common}</p>
                            <p className='text-[12px] font-medium'><strong>Region:</strong> {item.region}</p>
                            <p className='text-[12px] font-medium'><strong>Population:</strong> {item.population}</p>
                            <p className='text-[12px] font-medium'><strong>Capital:</strong> {item.capital}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Countries