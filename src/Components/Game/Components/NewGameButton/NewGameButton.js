import React from 'react';
import { Button } from 'reactstrap';

const NewGameButton = (props) => {
	return(
		<Button
			id="enter_button"
    		color="primary"
    		onClick={props.onClick}
    		size="lg">
    		New Game
    	</Button>
	);
}

export default NewGameButton;