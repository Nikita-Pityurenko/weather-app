import React, { useState } from 'react';
import Weather from './Weather';
import Header from './Header';
import './App.css';

function App() {
  const [city, setCity] = useState('Київ');

  return (
      <div className="App">
        <Header setCity={setCity} />
        <Weather city={city} />
      </div>
  );
}

export default App;
