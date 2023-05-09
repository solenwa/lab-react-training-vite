import React from 'react'
import Rating from './Rating'

function DriverCard({name, rating, img, car}) {
  return (
    <div className="DriverCard">
    <div>
    <img src={img} alt="carImage"/>
    </div>
    <div>
    <h3>{name}</h3>
      <Rating>{rating}</Rating> 
      <p>{car.model} - {car.licensePlate}</p>
    </div>
    </div>
  )
}

export default DriverCard