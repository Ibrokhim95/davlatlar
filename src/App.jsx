


import React, { useEffect, useReducer, useState } from 'react'
import { createContext } from 'react'
// import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export const CountriesContext = createContext()


const App = () => {

  const reducer = (state, action) => {
    if(action.type === "ALL_COUNTRIES") {
      return {...state, countries: action.payload, all: action.payload}
    }
    if(action.type === "COUNTRY") {
      return {...state, countries: action.payload}
    }
    if(action.type === "FILTERED") {
      return {...state, countries: action.payload}
    }
    if(action.type === "SET_QUERY") {
      return {...state, query: action.payload}
    }
    
    return state
  }

  const initialValue = {
    countries: [],
    all: [],
    country: {},
    filterData: [],
    query: '',
  }

  const [country, setCountry] = useState({})


  const [state, dispatch] = useReducer(reducer, initialValue)

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(`https://restcountries.com/v3.1/all`) 
      const data = await resp.json()
      dispatch({type: "ALL_COUNTRIES", payload: data})
    }
    getData()
  }, [])
  

  return (
    <CountriesContext.Provider value={[state, dispatch, country, setCountry]}>
      <div className='relative'>
        
        <About/>
        <Home/>


        {/* <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes> */}
      </div>
    </CountriesContext.Provider>
  )
}

export default App