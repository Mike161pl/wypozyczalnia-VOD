import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';

const Footer = (props) => {
  const theme = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();
  return (
    <div className={`text-center m-3 text-${theme.color}`}>
     Wypożyczalnia filmów VOD {currentYear}
    </div>
  );
}

export default Footer;