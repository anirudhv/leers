import React from 'react';
import styles from './GameMode.module.css';

const GameMode = (props) => {
	return(
		<button id={styles.button} className="ripple" style={{background: props.color}}>
			{props.name}
		</button>
	);
}

export default GameMode;