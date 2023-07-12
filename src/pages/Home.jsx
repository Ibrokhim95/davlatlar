

import React, { useContext } from 'react'
import { CountriesContext } from '../App'
import Countries from '../components/Countries'
import Forma from '../components/Forma'
import Title from '../components/Title'
import About from './About'

const Home = () => {

    const [state, dispatch] = useContext(CountriesContext)

  return (
    <div id='home' className='w-[100%] z-10'>
        <Title/>
        <Forma/>
        <Countries/>
    </div>
  )
}

export default Home