import React from 'react';
import './App.css';
import { useState } from 'react';

const hotelDB = {
  All:[
    {
      name:'ITC Maurya, A Luxury Collection Hotel,New Delhi',rating:'4.7/5'
    },
    {
      name: 'The Taj Mahal Palace,Mumbai', rating: '4.7/5'
    },
    { name: 'ITC Kohenur Hyderabad', rating: '4.7/5' },
    { name: 'The Oberoi Mumbai', rating: '4.7/5' },
     { name: 'The Oberoi Banglore', rating: '4.7/5' },
    {
      name:'The Leela Palace New Delhi',rating:'4.6/5'
    },
    { name: 'The Leela Palace', rating: '4.6/5' },
    { name: 'Taj Falaknuma Palace', rating: '4.6/5' },
  ],
  Delhi:[
    {
      name:'ITC Maurya, A Luxury Collection Hotel',rating:'4.7/5'
    },
    {
      name:'The Leela Palace New Delhi',rating:'4.6/5'
    }
  ],
  Mumbai: [{
    name: 'The Taj Mahal Palace', rating: '4.7/5'
  },
  { name: 'The Oberoi', rating: '4.7/5' }
  ],
  Banglore: [
    { name: 'The Oberoi', rating: '4.7/5' },
    { name: 'The Leela Palace', rating: '4.6/5' }
  ],
  Hyderabad: [
    { name: 'Taj Falaknuma Palace', rating: '4.6/5' },
    { name: 'ITC Kohenur', rating: '4.7/5' }

  ]


};

function App() {
  const [topHotel, settopHotel] = useState('All')
  function checkTopHotels(hotel) {
    settopHotel(hotel);
  }
  return (
    <div className="App">
      <h1>Top Hotels</h1>
      <p>Checkout Top Hotels, Select a city to get started 🏨</p>
      {
        Object.keys(hotelDB).map((hotel) => (
          <button onClick={() => checkTopHotels(hotel)}>{hotel}</button>

        ))}

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {hotelDB[topHotel].map((tohotel) => (
            <li key={tohotel.name} style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px solid darkgreen",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.5rem"
            }} >
              {""}
            
              <div style={{ fontSize: 'larger' }}>{tohotel.name}</div>
              <div style={{ fontSize: 'smaller' }}>{tohotel.rating}</div>
            </li>
          ))}
        </ul>
      </div>

    </div>

  );
}

export default App;
