import React from 'react';
import { Badge } from 'reactstrap';

const WordList = (props) => {
	return(
		<div>
			{props.list.map((word, i) => (
				<Badge color="success"
				key={i}
					pill>
					{word}
				</Badge>
				))}
			{props.showError && (props.error.map((error, i) => (
				<Badge color="danger"
				key={i}
				pill>
				{error}
				</Badge>
				)))}
		</div>
	);
}

export default WordList;