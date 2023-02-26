import React from 'react';
import styles from './Header.module.css';
import { pick } from 'lodash';

const Header = (props) => {
	return(
		<div>
			<div id={styles.header}>
				<div id={styles.letters}>
					<span><strong>Starting letter(s): <p className={styles.lettercolor}>{props.start}</p></strong></span>
					<span><strong>Ending letter(s): <p className={styles.lettercolor}>{props.end}</p></strong></span>
				</div>
				<img id={styles.logo} src = "LeersLogo.png" />
				<span><strong>Words Found: <p id={styles.foundcolor}>{props.found}</p></strong></span>
				<br />
			</div>
		</div>
	);
}

export default Header;