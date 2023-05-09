import React from 'react'

function Random({min, max}) {
    const randomNumber = Math.floor(Math.random() * (max - min) + 1 + min);
    console.log(randomNumber)
  return (
    <div className='Random'>
        <p>Random value between {min} and {max} is {randomNumber}</p>
    </div>
  )
}

export default Random