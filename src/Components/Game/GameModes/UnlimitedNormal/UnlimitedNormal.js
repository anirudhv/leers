import React, { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import styles from './UnlimitedNormal.module.css';
import Textbox from '../../Components/Textbox/Textbox';
import Feedback from '../../Components/Feedback/Feedback';
import WordList from '../../Components/WordList/WordList';
import Header from '../../Components/Header/Header';
import NewGameButton from '../../Components/NewGameButton/NewGameButton';
import GiveUpButton from '../../Components/GiveUpButton/GiveUpButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { UnlimitedNormalSetup } from '../../../../Functions/UnlimitedSetup.js';

const UnlimitedNormal = (props) => {
	//https://www.pluralsight.com/blog/software-development/suspense-react-18-explained
	const data = JSON.parse(localStorage.getItem('unlimited-answers'));
	const[open, setOpen] = useState(false);
    const[found, setFound] = useState(JSON.parse(localStorage.getItem('unlimited-found')));
    const[notFound, setnotFound] = useState(data.filter((word) => !found.includes(word)));
	const onEnter = (event) => {
		const userVal = document.getElementById('wordbox').value;
		if(data.includes(userVal.toLowerCase()) && !found.includes(userVal.toLowerCase())) {
			setFound([...found, userVal]);
			setOpen(true);
			document.getElementById('wordbox').value = "";
		}
	}

	const onClick = (event) => {
		localStorage.setItem('unlimited-given-up', 'yes');
		setnotFound(data.filter((word) => !found.includes(word)));
	}

	const handleClose = (event, reason) => {
		if(reason === 'clickaway')
			return;
		setOpen(false);
	}

	const newGame = async (event) => {
		localStorage.removeItem('unlimited-answers');
		localStorage.removeItem('unlimited-found');
		localStorage.removeItem('unlimited-given-up');
		await UnlimitedNormalSetup();
		setFound([]);
	}

	useEffect(() => {
		localStorage.setItem('unlimited-found', JSON.stringify(found));
	}, [found]);

	return(
		<div id={styles.unlimitednormal}>
			<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
				<Alert severity="success" variant="filled" />
			</Snackbar>
			<Header 
				start={localStorage.getItem('unlimited-start')}
				end={localStorage.getItem('unlimited-end')}
				found={found.length + "/" + data.length} />
				<br />
			{(localStorage.getItem('unlimited-given-up') === 'no' && found.length !== data.length) && (
			<div className={styles.game}>
				<Textbox
					onEnter={onEnter} />
				<br />
				<GiveUpButton onClick={onClick} />
			</div>
			)
			}
			{(found.length === data.length) && (
				<h1 id={styles.finished}>Game Over!</h1>
			)}
			{(localStorage.getItem('unlimited-given-up') === 'yes') && (
				<h1 id={styles.failed}>Game Over!</h1>
			)}
			{(found.length === data.length || localStorage.getItem('unlimited-given-up') === 'yes') && (
				<div className={styles.game}>
					<NewGameButton onClick={newGame} />
				</div>
			)}
			<WordList 
			list={found}
			error={notFound}
			showError={localStorage.getItem('unlimited-given-up') === 'yes' || found.length === data.length} />
		</div>
	);
}

export default UnlimitedNormal;