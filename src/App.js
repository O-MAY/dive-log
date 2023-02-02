import { useState, useEffect } from 'react';

import Header from './components/Header';
import Dives from './components/Dives';
import AddDiveButton from './components/AddDiveButton';
import NoDivesMessage from './components/NoDivesMessage';
import AddDiveForm from './components/AddDiveForm';

function App() {

const [dives, setDives] = useState([
  // {
  //   id: 1,
  //   diveSite: 'MENJANGAN ISLAND',
  //   location: 'BALI',
  //   img: './images/menjangan-island.jpg',
  //   sighted: 'Moray eel, Reef Shark',
  //   diveTime: 39,
  //   maxDepth: 28
  // },
  // {
  //   id: 2,
  //   diveSite: 'LIGHTHOUSE',
  //   location: 'KOH TAO, THAILAND',
  //   img: './images/koh-tao.jpg',
  //   sighted: 'Whale Shark',
  //   diveTime: 42,
  //   maxDepth: 30
  // },
  // {
  //   id: 3,
  //   diveSite: 'AKITSUSHIMA WRECK',
  //   location: 'PHILIPPINES',
  //   img: './images/akitsushima.jpg',
  //   sighted: 'Barracuda',
  //   diveTime: 27,
  //   maxDepth: 38
  // }
])

useEffect(() => {
  const getDives = async () => {
    const divesFromServer = await fetchDives()
    setDives(divesFromServer)
  }

  getDives()
}, [])

// Fetch Dives
const fetchDives = async () => {

  const res = await fetch('http://localhost:5000/dives')
  const data = await res.json()

  return data
}

// Delete Dive
const deleteDive = async (id) => {
  await fetch(`http://localhost:5000/dives/${id}`, {
    method: 'DELETE',
  })

  setDives(dives.filter((dive) => dive.id !== id))
}

// Add Dive
const addDive = async (dive) => {
  const res = await fetch('http://localhost:5000/dives', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(dive)
  })

  const data = await res.json()

  setDives([...dives, data])
}

  return (
    <>
    <div className="App">
       
            <Header />
            {dives.length > 0 ? <Dives dives={dives} onDelete={deleteDive} /> 
            :(<NoDivesMessage />)} 
              {dives.length > 0 ? '' : <div id='add-dive-button-no-dives'><AddDiveButton /></div>}
            <div className='dive-to-add-dive' />
            <AddDiveForm onAdd={addDive} />
            <div className='add-dive-depth' />
    </div>
    </>
  );
}

export default App;
