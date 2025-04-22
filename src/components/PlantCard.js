import React,{ useState } from "react";

function PlantCard({image, price, name}) {
  const [soldOut, setSoldOut] = useState(true);


  const soldClass = soldOut ? "In Stock" : "Out of Stock"
  function handleClick(){
    setSoldOut((prevMode) => !prevMode);
  }

  return (
    <li className="card" data-testid="plant-item"> 
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className={soldOut ? "primary" : ""} onClick={handleClick}>{soldClass}</button>
    </li>
  );
}


export default PlantCard;
