import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
	return(
		<div id={styles.header}>
			<span><strong>Starting letter(s):</strong>{props.start}</span>
			<span><strong>Ending letter(s):</strong>{props.end}</span>
			<span><img src="LeersLogo.png" /></span>
			<span><strong>Words Found:</strong>{props.found}</span>
		</div>
	);
}

export default Header;