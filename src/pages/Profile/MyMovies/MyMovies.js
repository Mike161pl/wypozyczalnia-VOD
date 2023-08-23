import { useEffect, useState, useContext } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from '../../../axios'
import { objectToArrayWithId } from '../../../helpers/objects'
import useAuth from '../../../hooks/useAuth'
import ThemeContext from '../../../context/themeContext'
export default function MyMovies(props) {
	const [auth] = useAuth()
	const { url } = useRouteMatch()
	const [movies, setMovies] = useState([])

	const theme = useContext(ThemeContext)

	const fetchMovies = async () => {
		try {
			const res = await axios.get('/movies.json')
			const newMovie = objectToArrayWithId(res.data).filter(movie => movie.user_id === auth.userId)
			setMovies(newMovie)
		} catch (ex) {
			console.log(ex.response)
		}
	}

	const deleteHandler = async id => {
		try {
			await axios.delete(`/movies/${id}.json?auth=${auth.token}`)
			setMovies(movies.filter(x => x.id !== id))
		} catch (ex) {
			console.log(ex.response)
		}
	}

	useEffect(() => {
		fetchMovies()
	}, [])

	return (
		<div>
			{movies ? (
				<table className='table'>
					<thead>
						<tr>
							<th>Nazwa</th>
							<th>Status</th>
							<th>Opcje</th>
						</tr>
					</thead>

					<tbody>
						{movies.map(movie => (
							<tr key={movie.id}>
								<td>{movie.name}</td>
								<td>
									{movie.status == 1 ? (
										<span className='badge bg-success text-light'>Dostępny</span>
									) : (
										<span className='badge bg-secondary text-light'>Niedostępny</span>
									)}
								</td>
								<td>
									<Link to={`/profil/filmy/edytuj/${movie.id}`} className='btn btn-warning'>
										Edytuj
									</Link>
									<button onClick={() => deleteHandler(movie.id)} className='ml-2 btn btn-danger'>
										Usuń
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>Nie masz jeszcze żadnego filmu.</p>
			)}
			<Link to={`${url}/dodaj`} className={`ml-1 btn btn-${theme.color}`}>
				Dodaj film
			</Link>
		</div>
	)
}
