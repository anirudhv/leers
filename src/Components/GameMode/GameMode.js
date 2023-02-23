import React from 'react';
import styles from './GameMode.module.css';
import { useNavigate } from 'react-router-dom';

const GameMode = (props) => {
	const navigate = useNavigate();
	const playGame = () => {
		if(props.mode === 'daily') {
			navigate("/daily");
		}
		if(props.mode === "unlimited - normal") {
			navigate("/unlimited-normal");
		}
		if(props.mode === "unlimited - time trial") {
			navigate("/ulimited-timetrial");
		}
		if(props.mode === "multiplayer") {
			navigate("/multiplayer");
		}
	}
	return(
		<button id={styles.button} className="ripple" style={{background: props.color}} onClick={playGame}>
			{props.name}
		</button>
	);
}

export default GameMode;