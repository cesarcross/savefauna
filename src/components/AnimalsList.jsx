import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimalsList = () => {
  const [animals, setAnimals] = useState([]);
  const [animalsList, setAnimalsList] = useState(
    `https://private-anon-e5357bb515-endangeredanimals.apiary-mock.com/all_animal_data`
  );

  useEffect(() =>
    axios.get(animalsList).then(
      (res) => {
        setAnimalsList(res.data.common_name);
        console.log(res.data);
        setAnimals(res.data.map((a) => a.common_name));
      },
      [animalsList]
    )
  );

  return (
    <div>
      <p>lista de animais</p>
      {animals}
    </div>
  );
};

export default AnimalsList;
