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
		</div>
	);
}

export default WordList;