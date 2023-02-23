import React from 'react';
import { Input } from 'reactstrap';

const Textbox = (props) => {
	//textbox, submission, and alerts shown here. alerts shown for 5 secs only, see https://stackoverflow.com/questions/65214950/how-to-disappear-alert-after-5-seconds-in-react-js
	//reactstrap used
	return(
		<div>
			<Input
			bsSize="lg"
			id="wordbox"
			name="word"
			placeholder={"Enter a word that starts with - " + props.start + " - and ends with - " + props.end}
			type="text"
			/>

	    </div>
	);
}

export default Textbox;