import { useEffect, useState } from 'react'
import LastMovie from '../../components/Movies/LastMovie/LastMovie'
import useStateStorage from '../../hooks/useStateStorage'
import useWebsiteTitle from '../../hooks/useWebsiteTitle'
import BestMovie from '../../components/Movies/BestMovie/BestMovie'
import Movies from '../../components/Movies/Movies'
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon'
import axios from '../../axios'
import { objectToArrayWithId } from '../../helpers/objects'

export default function Home(props) {
	useWebsiteTitle('Wypożyczalnia VOD')
	const [lastMovie, setLastMovie] = useStateStorage('last-movie', null)

	const [loading, setLoading] = useState(true)
	const [movies, setMovies] = useState([])

	const getBestMovie = () => {
		if (movies.length < 2) {
			return null
		} else {
			return movies.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0]
		}
	}
	const openMovie = movie => setLastMovie(movie)
	const removeLastMovie = () => setLastMovie(null)
	const fetchMovie = async () => {
		try {
			const res = await axios.get('/movies.json')
			const newMovie = objectToArrayWithId(res.data)
			setMovies(newMovie)
		} catch (ex) {
			console.log(ex.response)
		}
		setLoading(false)
	}

	useEffect(() => {
		fetchMovie()
	}, [])

	return loading ? (
		<LoadingIcon />
	) : (
		<>
			{lastMovie ? <LastMovie {...lastMovie} onRemove={removeLastMovie} /> : null}
			{getBestMovie() ? <BestMovie getMovie={getBestMovie} /> : null}
			{ movies.length <1 ? <div className='col-12 text-center'>Nie masz jeszcze ofert'</div>:<Movies onOpen={openMovie} movies={movies} />}
		</>
	)
}
