import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Feedback = (props) => {
	const[open, setOpen] = useState(props.open);
	const handleClose = (event, reason) => {
		console.log("In here")
		if(reason === 'clickaway')
			return;
		setOpen(false)
	}
	return(
		<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
			<Alert severity={props.severity}>
				<AlertTitle>{props.title}</AlertTitle>
			</Alert>
		</Snackbar>
	);
}

export default Feedback;