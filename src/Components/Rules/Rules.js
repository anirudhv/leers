import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Rules.module.css';

const Rules = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	}
	return(
		<div>
			<div id={styles.rules}>
				<img id={styles.logo} src="LeersLogo.png"alt="Logo" onClick={goHome} />
				<h1>How to play Leers</h1>
			</div>
			<ol>
				<li>Guess as many words as you can given a set of starting and ending letters.</li>
				<li>You do not need to press the "Enter" key on your keyboard; just keep typing. The game will know once you've entered a valid word.</li>
				<li>There are two game modes, daily and unlimited - normal. <strong>New Game Modes coming soon!</strong></li>
				<li>If you can't think of any more words to guess, press the "Give Up" button and all remaining words will be revealed.</li>
				<ul>
					<li><strong>Daily: </strong>Everyday, all players will be given the same set of starting and ending letters. This game mode can only be played once per day.</li>
					<li><strong>Unlimited - normal: </strong>Players are given a randomly generated set of starting and ending letters at the start of each game. The game mode can be played an unlimited amount of times.</li>
				</ul>
			</ol>
		</div>
	);
}

export default Rules;