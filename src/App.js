import { useState } from 'react';

import Landing from './components/Landing';
import Dives from './components/Dives';



function App() {

const [dives, setDives] = useState([
  {
    id: 1,
    diveSite: 'MENJANGAN ISLAND',
    location: 'BALI',
    img: './images/menjangan-island.jpg',
    spotted: 'Moray eel, Reef Shark',
    diveTime: 39,
    maxDepth: 28
  },
  {
    id: 2,
    diveSite: 'LIGHTHOUSE',
    location: 'KOH TAO, THAILAND',
    img: './images/koh-tao.jpg',
    spotted: 'Whale Shark',
    diveTime: 42,
    maxDepth: 30
  },
  {
    id: 3,
    diveSite: 'AKITSUSHIMA WRECK',
    location: 'PHILIPPINES',
    img: './images/akitsushima.jpg',
    spotted: 'Barracuda',
    diveTime: 27,
    maxDepth: 38
  }
])

  return (
    <>
    <div className="App">
       
            <Landing />
            <Dives dives={dives} />
        
    </div>
    </>
  );
}

export default App;
