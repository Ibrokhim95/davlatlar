

import React, { useContext, useState } from 'react'
import { CountriesContext } from '../App'
import Countries from '../components/Countries'
import Forma from '../components/Forma'
import Title from '../components/Title'
import About from './About'

const Home = () => {

    const [state, dispatch] = useContext(CountriesContext)
    const [dark, setDark] = useState(false)


  return (
    <div id='home' className='w-[100%] z-10'>
        <Title setDark={setDark}/>
        <Forma dark={dark}/>
        <Countries/>

        <h1 className='text-center mb-12 mt-2'>This is made by <a className='text-blue-500' href="https://i-khamraev.netlify.app/">Ibrokhim</a></h1>
    </div>
  )
}

export default Home