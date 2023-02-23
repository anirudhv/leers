import React, { useState } from 'react';
import Textbox from '../../Components/Textbox/Textbox';
import Feedback from '../../Components/Feedback/Feedback';
import WordList from '../../Components/WordList/WordList';
import Header from '../../Components/Header/Header';
import EnterButton from '../../Components/EnterButton/EnterButton';
import GiveUpButton from '../../Components/GiveUpButton/GiveUpButton';
import styles from './Daily.module.css';

const Daily = (props) => {
	const[feedback, setFeedback] = useState("none");
	const onClick = (event) => {
		const temp = localStorage.getItem('daily-answers');
		if(temp.hasOwnProperty(document.getElementById('daily-text'))) {
			temp[document.getElementById('daily-text')] = true;
		localStorage.setItem('daily-answers', temp);
		setFeedback("good");
		} else {
			setFeedback(false);
		}
	}
	return(
		<div id={styles.daily}>
			<Header 
				start={localStorage.getItem('daily-start')}
				end={localStorage.getItem('daily-end')}
				found="1" />
			<Textbox
				id="daily-text"
				start={localStorage.getItem('daily-start')}
				end={localStorage.getItem('daily-end')} />
			<div>
				<EnterButton />
				<GiveUpButton />
			</div>
			<WordList />
		</div>
	);
}

export default Daily;