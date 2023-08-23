import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { objectToArrayWithId } from '../../helpers/objects'
import axios from '../../axios'
import { useState } from 'react'
import Movies from '../../components/Movies/Movies'

export default function Search(props) {
	const { term } = useParams()
	const [movies, setMovies] = useState([])

	const search = async () => {
		try {
			const res = await axios.get('/movies.json')
			const newMovies = objectToArrayWithId(res.data).filter(movie => movie.name.includes(term))
			setMovies(newMovies)
		} catch (ex) {
			console.log(ex.response)
		}
	}

	useEffect(() => {
		search()
	}, [term])

	return (
		<div>
			<h2>Wyniki dla frazy "{term}":</h2>
			<Movies movies={movies} />
		</div>
	)
}
