import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Daily from './Components/Game/GameModes/Daily/Daily';
import Multiplayer from './Components/Game/GameModes/Multiplayer/Multiplayer';
import UnlimitedNormal from './Components/Game/GameModes/UnlimitedNormal/UnlimitedNormal';
import UnlimitedTimeTrial from './Components/Game/GameModes/UnlimitedTimeTrial/UnlimitedTimeTrial';
import Rules from './Components/Rules/Rules';
import { UnlimitedNormalSetup } from './Functions/UnlimitedSetup.js';

function App() {

  const today = new Date();
  const date = today.toISOString().substring(0, 10);
  if((localStorage.hasOwnProperty('date') && date !== localStorage.getItem('date')) || !localStorage.hasOwnProperty('date')) {
    localStorage.setItem('date', date);
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        const todaysData = data[date];
        const todaysStart = todaysData['start'];
        const todaysEnd = todaysData['end'];
        localStorage.setItem('daily-start', todaysStart);
        localStorage.setItem('daily-end', todaysEnd);
        localStorage.setItem('daily-given-up', 'no');
      });

    fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json')
      .then((res) => res.json())
      .then((data) => {
      correctWords(data);
  });
}

  const correctWords = (data) => {
        const answer = Object.keys(data)
          .filter((key) => key.startsWith(localStorage.getItem('daily-start')) && key.endsWith(localStorage.getItem('daily-end')));
      localStorage.setItem('daily-answers', JSON.stringify(answer));
      localStorage.setItem('daily-found', JSON.stringify([]));
  }

  UnlimitedNormalSetup();


  return (
  	<div className="App">
  		<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/unlimited-normal" element={<UnlimitedNormal />}  />
        <Route path="/ulimited-timetrial" element={<UnlimitedTimeTrial />} />
        <Route path="/multiplayer" element={<Multiplayer />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
  	</div>
  );
}
export default App;
