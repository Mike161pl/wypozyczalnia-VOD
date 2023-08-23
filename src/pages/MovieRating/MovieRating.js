import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon'
import useWebsiteTitle from '../../hooks/useWebsiteTitle'
import axios from '../../axios'
import useAuth from '../../hooks/useAuth'


function MovieRating(props) {
	const history = useHistory()
	const [auth] = useAuth()
	const { id } = useParams()
	const [movie, setMovie] = useState(null)
	const [loading, setLoading] = useState(true)
	const [rating, setRating] = useState(5)

	const setTitle = useWebsiteTitle()

	const fetchMovie = async () => {
		try {
			const res = await axios.get(`/movies/${id}.json`)
			setMovie(res.data)
			setTitle('Film - ' + res.data.name)
		} catch (ex) {
			console.log(ex.response)
		}
		setLoading(false)
		
	}

	const rateMovie = async () => {
		try {
			await axios.put(`/movies/${id}/rating.json?auth=${auth.token}`, rating)
			history.push('/')
		} catch (ex) {
			console.log(ex.response)
		
		}
	}

	useEffect(() => {
		// pobieranie danych
		fetchMovie()
	}, [])

	return loading ? (
		<LoadingIcon />
	) : (
		<div className='card'>
			<div className='card-header'>
				<h1>Film: {movie.name}</h1>
			</div>
			<div className='card-body'>
				<img src={require(`../../assets/images/${movie.image}`)} alt={`Okładka filmu ${movie.name}`} className='img-fluid img-thumbnail mb-4' />

				<p>
					Data premiery: <b>{movie.date}</b>
				</p>
				<p className='lead'>{movie.description}</p>
				<p>Opcje językowe:</p>
				<ul>{movie.features ? (movie.features.map(item => (
						<li key={item}>{item}</li>))):(
							null
						)}
					
					
				</ul>
				<h4>Ocena: {props.rating ?? 'zaloguj się aby dodać ocenę'}</h4>
			</div>
			<div className='card-footer'>
				{auth ? (
					<div className='form-group row mt-4'>
						<div className='col'>
							<select
								value={rating}
								onChange={e => setRating(e.target.value)}
								className='form-control form-select-lg mb-3'>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
							</select>
						</div>
						<div className='col'>
							<button className='btn btn-info' onClick={rateMovie}>
								Oceń
							</button>
						</div>
					</div>
				) : null}
			</div>
		</div>
	)
}

export default MovieRating
