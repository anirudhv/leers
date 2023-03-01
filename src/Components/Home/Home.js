import React from 'react';
import GameMode from '../GameMode/GameMode';
import styles from './Home.module.css';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const goToRules = () => {
    navigate("/rules");
  }
  return (
    <div id={styles.home}>
    	<img id={styles.logo} src="LeersLogo.png" alt="logo" />
      <br />
      <InfoIcon id={styles.rules} onClick={goToRules} />
      <p>How to Play</p>
    	<GameMode className="mode" name = "daily" color="#47ff6f" mode="daily" />
    	<GameMode className="mode" name = "unlimited - normal" color="#ff002f" mode="unlimited - normal" />
    	{/*<GameMode className="mode" name = "unlimited - time trial" color="#bd8ced" mode="unlimited - time trial" />
    	<GameMode className="mode" name = "multiplayer" color="linear-gradient(110deg, #fdcd3b 50%, #ffed4b 50%)" mode="multiplayer" />*/}
    </div>
  );
}

export default Home;
