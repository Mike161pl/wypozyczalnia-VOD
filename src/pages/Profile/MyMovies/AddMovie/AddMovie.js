import axios from '../../../../axios';
import { useHistory } from 'react-router-dom';
import MovieForm from '../MovieForm';
import useAuth from '../../../../hooks/useAuth';

const AddMovie = props => {
  const [auth] = useAuth();
  const history = useHistory();

  const submit = async form => {
    await axios.post(`/movies.json?auth=${auth.token}`, form);
    history.push('/profil/filmy');
  }

  return (
    <div className="card">
      <div className="card-header">Dodaj film</div>
      <div className="card-body">
        
        <p className="text-muted">Uzupełnij dane filmu</p>

          <MovieForm 
            buttonText="Dodaj!"
            onSubmit={submit}/>
          
      </div>
    </div>
  );
}

export default AddMovie;