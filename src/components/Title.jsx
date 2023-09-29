
import React, { useState } from 'react'

const Title = ({setDark}) => {

  const body = document.querySelector("body")
  const btn = document.querySelector("#dayNightBtn")


  const dayNight = () => {
    if (!body.className) {
      body.className = "dark"
      btn.innerText = "Kunduzgi rejim"
      setDark(true)
    } else {
      body.className = ""
      btn.innerText = "Tungi rejim"
      setDark(false)
    }
  }

  return (
    <div className='container flex flex-col gap-5'>
        <h1 className='text-2xl font-bold'>Davlatlar haqida ma'lumotlar</h1>

        <button id='dayNightBtn' onClick={() => dayNight()} className='border border-slate-300 w-max rounded-md shadow-lg p-2 italic hover:pointer'>Tungi rejim</button>
    </div>
  )
}

export default Title