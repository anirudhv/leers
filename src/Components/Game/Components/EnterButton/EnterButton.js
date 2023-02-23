import React from 'react';
import { Button } from 'reactstrap';

const EnterButton = (props) => {
	return(
		<Button
			id="enter_button"
			onClick={props.onClick}
    		color="primary"
    		size="lg">
    		Enter
    	</Button>
	);
}

export default EnterButton;