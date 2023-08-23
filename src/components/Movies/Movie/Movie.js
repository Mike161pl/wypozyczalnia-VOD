import PropTypes from 'prop-types'
import styles from './Movie.module.css'
import ThemeContext from '../../../context/themeContext'
import { useContext } from 'react'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import img from '../../../assets/images/bez okładki.jpg'

const propTypes = {
	name: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	
}

function Movie(props) {
	const theme = useContext(ThemeContext)
	const [auth] = useAuth()

	const clickHandler = e => {
		
		if (props.onOpen) {
			props.onOpen(props)
			console.log(props.image);
			
		}
	}

	return (
		<div className={`card ${styles.movie}`} key={props.id}>
			<div className='card-body'>
				<div className='row'>
					<div className='col-4'>{
						props.image ? (<img src={require(`../../../assets/images/${props.image}`)} alt={props.name} className='img-fluid img-thumbnail' />):(<img src={require(`../../../assets/images/${props.image}`)} alt={props.name} className='img-fluid img-thumbnail' />

						)
					}
						
					</div>
					<div className='col-8'>
						<div className='row'>
							<div className='col'>
								<p className={styles.title}>{props.name}</p>
								<span className='badge badge-light'>Data premiery: {props.date}</span>
							</div>
							<div className='col text-right'>
								<h5>Ocena: {props.rating ?? 0}</h5>
								<Link onClick={clickHandler} to={`/filmy/${props.id}`} className={`btn btn-${theme.color} mt-2 px-4`}>
									Pokaż
								</Link>
							</div>
						</div>
					</div>

					<div className='col-6'>
						<p className={styles.description}>{props.description}</p>

						{auth ? (
							<p className='mt-2'>Dostępność: {props.status == 1 ? 'Dostępny' : 'Niedostępny'}</p>
						) : (
							<p className='mt-2'>Dostępność: zaloguj</p>
						)}
					</div>
					<div className='col-6'>
						{auth ? (
							<p className='mt-2'>Filmy użytkownika: {props.username}</p>
						) : (
							<p className='mt-2'>Filmy użytkownika: zaloguj</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

Movie.propTypes = propTypes

export default Movie
