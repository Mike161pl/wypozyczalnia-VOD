import {useContext } from 'react';
import ThemeContext from '../../../context/themeContext';
export default function LoadingButton(props) {
  const theme = useContext(ThemeContext);
  const className = props.className || 'btn-secondary';
  
  const buttonProps = {...props};
  delete buttonProps.loading;

  return props.loading 
      ? (
        <button className={`btn ${className}`} type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span className="sr-only">Ładowanie...</span>
        </button>
      )
      : <button {...buttonProps} className={`ml-1 btn btn-${theme.color}`}>{props.children}</button>
}