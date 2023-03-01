import React, { useState, useEffect } from 'react';
import Textbox from '../../Components/Textbox/Textbox';
import WordList from '../../Components/WordList/WordList';
import Header from '../../Components/Header/Header';
import GiveUpButton from '../../Components/GiveUpButton/GiveUpButton';
import styles from './Daily.module.css';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Daily = (props) => {
	const answers = JSON.parse(localStorage.getItem('daily-answers'));
	const[open, setOpen] = useState(false);
	const[found, setFound] = useState(JSON.parse(localStorage.getItem('daily-found')));
	const[notFound, setnotFound] = useState(answers.filter((word) => !found.includes(word)));
	const onEnter = (event) => {
		const userVal = document.getElementById('wordbox').value;
		if(answers.includes(userVal.toLowerCase()) && !found.includes(userVal.toLowerCase())) {
			setFound([...found, userVal]);
			setOpen(true);
			document.getElementById('wordbox').value = "";
		}
	}

	const onClick = (event) => {
		localStorage.setItem('daily-given-up', 'yes');
		setnotFound(answers.filter((word) => !found.includes(word)));
	}

	const handleClose = (event, reason) => {
		if(reason === 'clickaway')
			return;
		setOpen(false)
	}

	useEffect(() => {
		localStorage.setItem('daily-found', JSON.stringify(found));
	}, [found]);
	return(
		<div id={styles.daily}>
			<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
				<Alert severity="success" variant="filled" />
			</Snackbar>
			<Header 
				start={localStorage.getItem('daily-start')}
				end={localStorage.getItem('daily-end')}
				found={found.length + "/" + answers.length} />
				<br />
			{(localStorage.getItem('daily-given-up') === 'no' && found.length !== answers.length) && (
			<div id={styles.game}>
				<Textbox
					onEnter={onEnter} />
				<br />
				<GiveUpButton onClick={onClick} />
			</div>
			)
			}
			{(found.length === answers.length) && (
				<h1 id={styles.finished}>Game Over!</h1>
			)}
			{(localStorage.getItem('daily-given-up') === 'yes') && (
				<h1 id={styles.failed}>Game Over!</h1>
			)}
			<WordList 
			list={found}
			error={notFound}
			showError={localStorage.getItem('daily-given-up') === 'yes' || found.length === answers.length} />
		</div>
	);
}

export default Daily;