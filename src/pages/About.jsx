

import React, { useContext } from 'react'
import { CountriesContext } from '../App'

const About = () => {
  
  const [state, dispatch, country, setCountry] = useContext(CountriesContext)
  
  const home = document.getElementById("home")

  const back = (e) => {
    const about = e.target.parentElement
    about.classList.add("hidden")
    home.classList.remove("hidden")
  }


  return (
    <div  id="about" className='p-[30px] w-[100%] h-[100%] z-0 absolute hidden'>
      <button onClick={(e) => back(e)} className='border border-slate-300 rounded-md shadow-lg p-2 px-6 mb-[80px] mt-[30px] tracking-wider'>Back</button>
  
      <div className="grid grid-cols-2 gap-8">
        <div className="flag">
          <img className='h-[100%] w-[100%] block' src={`https://flagcdn.com/${country.cca2}.svg`} alt="" />
          {/* <img className='h-[100%] w-[100%] block' src={`https://flagcdn.com/jo.svg`} alt="" /> */}
        </div>
        <div className="info my-auto">
          <h1 className='text-4xl font-bold mb-3'>{country.commonName}</h1>
          <div className='grid grid-cols-2'>
            <div>
              <p className='font-medium'><strong>Region:</strong> {country.region}</p>
              <p className='font-medium'><strong>Sub Region:</strong> {country.subRegion}</p>
              <p className='font-medium'><strong>Capital:</strong> {country.capital}</p>
              <p className='font-medium'><strong>Area:</strong> {country.area}</p>
            </div>

            <div>
              <p className='font-medium'><strong>Population:</strong> {country.population}</p>
              <p className='font-medium'><strong>TopLevelDomain:</strong> {country.tld}</p>
              <p className='font-medium'><strong>Calling Codes:</strong> {country.callingCode}</p>
              {/* <p className='font-medium'><strong>Native Name:</strong> {country.nativeName}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About