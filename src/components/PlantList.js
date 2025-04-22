import React, { useState, useEffect }  from "react";
import PlantCard from "./PlantCard";

function PlantList({search}) {

  const [plants, setPlants] = useState ([])

  useEffect(function(){
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then((data) => setPlants(data))
    .catch(error => console.log(error))
  }, [])

  const filterPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <ul className="cards">{filterPlants.map((plant) => (
    <PlantCard key={plant.id} price={plant.price} name={plant.name} image={plant.image} />
    ))}</ul>
  );
}


export default PlantList;
