import { useState } from 'react';

import Header from './components/Header';
import Dives from './components/Dives';
import AddDiveForm from './components/AddDiveForm';
import AddDiveButton from './components/AddDiveButton';
import NoDivesMessage from './components/NoDivesMessage';
import UseForm from './components/UseForm';

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
       
            <Header />
            {dives.length > 0 ? <Dives dives={dives} onDelete={deleteDive} /> 
            :(<NoDivesMessage />)} 
              {dives.length > 0 ? '' : <div id='add-dive-button-no-dives'><AddDiveButton /></div>}
            <AddDiveForm onAdd={addDive} />
            <UseForm onAdd={addDive} />
    </div>
    </>
  );
}

export default App;
