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
	const[answers, setAnswers] = useState(JSON.parse(localStorage.getItem('daily-answers')));
	let wordsFound = null;
	const[feedback, setFeedback] = useState("none");
	const onClick = (event) => {
		const userVal = document.getElementById('wordbox').value;
		const temp = answers;
		if(Object.keys(temp).includes(userVal)) {
			console.log("Good")
			temp[userVal] = true;
			console.log(temp[userVal]);
			setFeedback("good");
			const numFound = pick(temp, (ans) => {
				return ans === true;
			});
			console.log(numFound);
		} else {
			console.log("Bad")
			setFeedback("Bad");
		}
	}

	useEffect(() => {
		localStorage.setItem('daily-answers', JSON.stringify(answers));
	}, [answers]);
	return(
		<div id={styles.daily}>
			<Header 
				start={localStorage.getItem('daily-start')}
				end={localStorage.getItem('daily-end')}
				found={answers} />
			<Textbox
				start={localStorage.getItem('daily-start')}
				end={localStorage.getItem('daily-end')} />
			<div>
				<EnterButton onClick={onClick} />
				<GiveUpButton />
			</div>
			<WordList list={wordsFound} />
		</div>
	);
}

export default Daily;