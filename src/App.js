import { useState } from 'react';

import Landing from './components/Landing';
import Dives from './components/Dives';
import AddDiveForm from './components/AddDiveForm';



function App() {

const [dives, setDives] = useState([
  {
    id: 1,
    diveSite: 'MENJANGAN ISLAND',
    location: 'BALI',
    img: './images/menjangan-island.jpg',
    sighted: 'Moray eel, Reef Shark',
    diveTime: 39,
    maxDepth: 28
  },
  {
    id: 2,
    diveSite: 'LIGHTHOUSE',
    location: 'KOH TAO, THAILAND',
    img: './images/koh-tao.jpg',
    sighted: 'Whale Shark',
    diveTime: 42,
    maxDepth: 30
  },
  {
    id: 3,
    diveSite: 'AKITSUSHIMA WRECK',
    location: 'PHILIPPINES',
    img: './images/akitsushima.jpg',
    sighted: 'Barracuda',
    diveTime: 27,
    maxDepth: 38
  }
])

// Delete Dive
const deleteDive = (id) => {
  console.log('delete', id)
  setDives(dives.filter((dive) => dive.id !== id))
}

// Add Dive
const addDive = (dive) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newDive = { id, ...dive }
  setDives([...dives, newDive])
}

  return (
    <>
    <div className="App">
       
            <Landing />
            {dives.length > 0 ? <Dives dives={dives} onDelete={deleteDive} /> 
            :( <span className='no-dives-message'>
              YOU DON'T HAVE ANY LOGGED DIVES TO SHOW HERE. ADD A NEW ONE BELOW, 
              OR, GET BACK IN THE WATER!</span> )}
            <AddDiveForm onAdd={addDive} />
    </div>
    </>
  );
}

export default App;
