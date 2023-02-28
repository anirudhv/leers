import React from 'react';
import { Button } from 'reactstrap';
import styles from './GiveUpButton.module.css';

const GiveUpButton = (props) => {

	return(
		<Button
			id={styles.button}
    		color="danger"
    		size="lg"
    		onClick={props.onClick} >
    		Give Up
    	</Button>
	);
}

export default GiveUpButton;