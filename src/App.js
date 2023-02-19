import React from 'react';
import './App.css';
import GameMode from './Components/GameMode/GameMode';

function App() {
  return (
    <div className="App">
      <div id="home">
      	<img src="LeersLogo.png" alt="logo" />
      	<GameMode className="mode" name = "daily" color="#47ff6f" />
      	<GameMode className="mode" name = "unlimited - normal" color="#ff002f" />
      	<GameMode className="mode" name = "unlimited - time trial" color="#bd8ced" />
      	<GameMode className="mode" name = "multiplayer" color="linear-gradient(110deg, #fdcd3b 50%, #ffed4b 50%)" />
      </div>
    </div>
  );
}

export default App;
