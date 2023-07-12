
import React from 'react'

const Title = () => {

  const body = document.querySelector("body")
  const btn = document.querySelector("#dayNightBtn")

  const dayNight = () => {
    if (!body.className) {
      body.className = "dark"
      btn.innerText = "Kunduzgi rejim"
    } else {
      body.className = ""
      btn.innerText = "Tungi rejim"
    }
  }

  return (
    <div className='container'>
        <h1 className='text-3xl font-bold'>Davlatlar haqida ma'lumotlar</h1>

        <button id='dayNightBtn' onClick={() => dayNight()} className='border border-slate-300 rounded-md shadow-lg p-1 px-2 text-xl italic hover:pointer'>Tungi rejim</button>
    </div>
  )
}

export default Title