import styles from './HeaderTitle.module.css'
import {useContext } from 'react';
import ThemeContext from '../../context/themeContext';


function HeaderTitle(props) {
	const theme = useContext(ThemeContext);
	return <h1 className={`${styles.title} text-${theme.color} `}>Wypożyczalnia VOD</h1>
}

export default HeaderTitle
