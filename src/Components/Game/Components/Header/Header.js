import React from 'react';
import styles from './Header.module.css';
import { pick } from 'lodash';

const Header = (props) => {
	const count = pick(props.found, (ans) => {
		return ans === true;
	});
	const counts2 = Object.keys(count).length;
	console.log("counts 2 - " + counts2);
	return(
		<div id={styles.header}>
			<span><strong>Starting letter(s):</strong>{props.start}</span>
			<span><strong>Ending letter(s):</strong>{props.end}</span>
			<span><strong>Words Found:</strong></span>
			<br />
		</div>
	);
}

export default Header;