


import React, { useContext } from 'react'
import { CountriesContext } from '../App'

const Forma = ({dark}) => {

    const [state, dispatch, country, setCountry] = useContext(CountriesContext)

    const body = document.querySelector("body")
    const drop = document.getElementById("drop")
    const sort = document.getElementById("sort")

    const dropDown = () => {
        if(drop.classList.contains("hidden")) {
            drop.classList.remove("hidden")
        } else {
            drop.classList.add("hidden")
        }
    }

    
    const filtered = (e) => {
        const countries = state.all.filter(item => item.region === e.target.id)
        sort.innerText = e.target.id
        if (e.target.id === "All") {
            dispatch({type: "FILTERED", payload: state.all})
        }
        else {
            dispatch({type: "FILTERED", payload: countries})
        }
    }

    const handlerSearch = (e) => {
        const getSearch = e.target.value
        dispatch({type: "SET_QUERY", payload: getSearch})

        if(getSearch.length > 0) {
            const searchData = state.countries.filter((item) => item.name.common.toLowerCase().includes(getSearch.toLowerCase()))
            dispatch({type: "FILTERED", payload: searchData})
        } else {
            dispatch({type: "FILTERED", payload: state.all})
        }
    }

        
    // console.log(state.countries.filter(item => item.region === "Asia"));

    return (
    <div className='container'>
        <input onChange={(e) => handlerSearch(e)} value={state.query} className='w-[400px] p-4 border-slate-300 rounded-md shadow-lg' type="text" name="" id="" placeholder='Davlatni izlang...'/>

        <div onClick={() => dropDown()} className="dropDownCon p-4 border border-slate-300 rounded-md shadow-lg relative">
            <div className="dropDown flex gap-2">
                <p id='sort'>Saralash</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

            <div id='drop' className={`drop p-2 border border-slate-300 rounded-md shadow-lg absolute w-[100%] lefta-0 top-[110%] hidden`}  style={{background: dark ? "#516278" : "#fff",}}>
                <p onClick={(e) => filtered(e)} id='All'>All</p>
                <p onClick={(e) => filtered(e)} id='Africa'>Africa</p>
                <p onClick={(e) => filtered(e)} id='Americas'>America</p>
                <p onClick={(e) => filtered(e)} id='Asia'>Asia</p>
                <p onClick={(e) => filtered(e)} id='Europe'>Europe</p>
                <p onClick={(e) => filtered(e)} id='Oceania'>Oceania</p>
            </div>
        </div>
    </div>
  )
}

export default Forma