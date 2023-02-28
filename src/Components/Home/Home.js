import React from 'react';
import GameMode from '../GameMode/GameMode';
import styles from './Home.module.css';

function Home() {
  return (
    <div id={styles.home}>
    	<img src="LeersLogo.png" alt="logo" />
      <br />
    	<GameMode className="mode" name = "daily" color="#47ff6f" mode="daily" />
    	<GameMode className="mode" name = "unlimited - normal" color="#ff002f" mode="unlimited - normal" />
    	<GameMode className="mode" name = "unlimited - time trial" color="#bd8ced" mode="unlimited - time trial" />
    	<GameMode className="mode" name = "multiplayer" color="linear-gradient(110deg, #fdcd3b 50%, #ffed4b 50%)" mode="multiplayer" />
    </div>
  );
}

export default Home;
