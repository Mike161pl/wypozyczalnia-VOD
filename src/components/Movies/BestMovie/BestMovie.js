import { useEffect, useState,useContext } from "react";
import moment from 'moment';
import { Link } from 'react-router-dom';
import ThemeContext from '../../../context/themeContext';
const BestMovie = (props) => {
  const [time, setTime] = useState('');
  // const [rate,setRate]=useState([])
  const theme = useContext(ThemeContext);
  const movie = props.getMovie();
  const endTime = moment().add(59, 'minutes').add(59, 'seconds');
  let interval = null;


  // componentDidMount()
  useEffect(() => {
    interval = setInterval(() => {
      const leftTime = -moment().diff(endTime) / 1000;
      const minutes = Math.floor(leftTime / 60);
      const seconds = Math.floor(leftTime % 60);
      setTime(`minut: ${minutes}, sekund: ${seconds}`);
    }, 1000);

    // componentWillUnmount()
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="card bg-success text-white">
      <div className="card-header">
        Najlepsza oferta!
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{movie.name}</h5>
          <p>Ocena: {movie.rating}</p>
        </div>
        <p>Do końca oferty pozostało: {time}</p>
        <Link to={`/filmy/${movie.id}`} className={`ml-1 btn btn-${theme.color}`}>
          Pokaż
        </Link>
      </div>
    </div>
  );
}

export default BestMovie;