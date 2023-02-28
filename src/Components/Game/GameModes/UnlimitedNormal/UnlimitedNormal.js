import React, { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import styles from './UnlimitedNormal.module.css';
import Textbox from '../../Components/Textbox/Textbox';
import Feedback from '../../Components/Feedback/Feedback';
import WordList from '../../Components/WordList/WordList';
import Header from '../../Components/Header/Header';
import EnterButton from '../../Components/EnterButton/EnterButton';
import GiveUpButton from '../../Components/GiveUpButton/GiveUpButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const UnlimitedNormal = (props) => {
	//https://www.pluralsight.com/blog/software-development/suspense-react-18-explained
	const[data, setData] = useState([]);
	const[open, setOpen] = useState(false);
    const[loading, setLoading] = useState(true);
    const[found, setFound] = useState(JSON.parse(localStorage.getItem('unlimited-found')));
    console.log("found is " + found);
    console.log("data is " + data)
    const[notFound, setnotFound] = useState();

    useEffect(() => {
    	console.log("Inside")
	    fetch("https://agreeable-jade-swordfish.cyclic.app/generateOne")
	      .then((res) => res.json())
	      .then((letters) => {
	      	localStorage.setItem('unlimited-start', letters['start']);
	      	localStorage.setItem('unlimited-end', letters['end']);
	      	localStorage.setItem('unlimited-given-up', 'no');
	    });
	    fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json')
	      .then((res) => res.json())
	      .then((data) => {
	      correctWords(data);
	  });
    }, []);

	const correctWords = (data) => {
		const answer = Object.keys(data)
	          .filter((key) => key.startsWith(localStorage.getItem('unlimited-start')) && key.endsWith(localStorage.getItem('unlimited-end')));
      console.log("data is " + answer);
      localStorage.setItem('unlimited-answers', JSON.stringify(answer));
      localStorage.setItem('unlimited-found', JSON.stringify([]));
      setData(answer);
      setLoading(false);
	}

	const onEnter = (event) => {
		const userVal = document.getElementById('wordbox').value;
		console.log("word is " + userVal);
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

    if(loading) {
    	return(
    		<div id={styles.spinner}>
			  <Spinner
			    color="secondary"
			    style={{
			      height: '30rem',
			      width: '30rem'
			    }}
			  />
    		</div>
    	);
    }

	return(
		<div>
			<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
				<Alert severity="success" variant="filled" />
			</Snackbar>
			<Header 
				start={localStorage.getItem('unlimited-start')}
				end={localStorage.getItem('unlimited-end')}
				found={found.length + "/" + data.length} />
				<br />
			{(localStorage.getItem('unlimited-given-up') === 'no' && found.length !== data.length) && (
			<div id={styles.game}>
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
			<WordList 
			list={found}
			error={notFound}
			showError={localStorage.getItem('unlimited-given-up') === 'yes' || found.length === data.length} />
		</div>
	);
}

export default UnlimitedNormal;