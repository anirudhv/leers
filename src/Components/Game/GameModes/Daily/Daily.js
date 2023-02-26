import React, { useState, useEffect } from 'react';
import Textbox from '../../Components/Textbox/Textbox';
import Feedback from '../../Components/Feedback/Feedback';
import WordList from '../../Components/WordList/WordList';
import Header from '../../Components/Header/Header';
import EnterButton from '../../Components/EnterButton/EnterButton';
import GiveUpButton from '../../Components/GiveUpButton/GiveUpButton';
import styles from './Daily.module.css';
import { pick } from 'lodash';

const Daily = (props) => {
	const answers = JSON.parse(localStorage.getItem('daily-answers'));

	const[found, setFound] = useState(JSON.parse(localStorage.getItem('daily-found')));
	const onEnter = (event) => {
		const userVal = document.getElementById('wordbox').value;
		console.log("word is " + userVal);
		if(answers.includes(userVal.toLowerCase()) && !found.includes(userVal.toLowerCase())) {
			setFound([...found, userVal]);

		} else {
		}
	}

	useEffect(() => {
		localStorage.setItem('daily-found', JSON.stringify(found));
		document.getElementById('wordbox').value = "";
	}, [found]);
	return(
		<div id={styles.daily}>
			<Header 
				start={localStorage.getItem('daily-start')}
				end={localStorage.getItem('daily-end')}
				found={found.length + "/" + answers.length} />
			<Textbox
				start={localStorage.getItem('daily-start')}
				end={localStorage.getItem('daily-end')}
				onEnter={onEnter} />
			<div>
				<GiveUpButton />
			</div>
			<WordList list={found} />

		</div>
	);
}

export default Daily;