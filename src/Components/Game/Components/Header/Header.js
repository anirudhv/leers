import React from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
	const navigate = useNavigate();
	const goHome = (event) => {
		navigate("/");
	}
	return(
		<div>
			<div id={styles.header}>
				<div id={styles.letters}>
					<span><strong>Starting letter(s): <p className={styles.lettercolor}>{props.start}</p></strong></span>
					<span><strong>Ending letter(s): <p className={styles.lettercolor}>{props.end}</p></strong></span>
				</div>
				<img onClick={goHome} id={styles.logo} alt="Logo" src = "LeersLogo.png" />
				<span><strong>Words Found: <p id={styles.foundcolor}>{props.found}</p></strong></span>
				<br />
			</div>
		</div>
	);
}

export default Header;