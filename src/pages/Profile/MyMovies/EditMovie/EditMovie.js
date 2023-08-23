import axios from '../../../../axios';
import { useHistory } from 'react-router-dom';
import MovieForm from '../MovieForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const EditMovie = props => {
  const [auth] = useAuth();
  const { id } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  const submit = async form => {
    await axios.patch(`/movies/${id}.json?auth=${auth.token}`, form);
    history.push('/profil/filmy');
  }

  const fetchMovies = async () => {
    const res = await axios.get(`/movies/${id}.json`);
    const movieData = res.data;

    delete(movieData.user_id);
    delete(movieData.rating);

    setMovie(movieData);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="card">
      <div className="card-header">Edytuj film</div>
      <div className="card-body">
        
        <p className="text-muted">Uzupełnij dane filmu</p>

          <MovieForm 
            movie={movie}
            buttonText="Zapisz!"
            onSubmit={submit}/>
          
      </div>
    </div>
  );
}

export default EditMovie;