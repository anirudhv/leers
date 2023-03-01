import React from 'react';
import { Input } from 'reactstrap';

const Textbox = (props) => {
	return(
		<div>
			<Input
			bsSize="lg"
			id="wordbox"
			name="word"
			placeholder="Enter a word"
			type="text"
			onKeyUp={props.onEnter}
			/>
	    </div>
	);
}

export default Textbox;