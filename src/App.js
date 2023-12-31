import { useReducer, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Searchbar from './components/UI/Searchbar/Searchbar'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import ThemeButton from './components/UI/ThemeButton/ThemeButton'
import ThemeContext from './context/themeContext'
import AuthContext from './context/authContext'
import ReducerContext from './context/reducerContext'
import HeaderTitle from './components/HeaderTitle/HeaderTitle'
import { reducer, initialState } from './reducer'
import Home from './pages/Home/Home'
import MovieRating from './pages/MovieRating/MovieRating'
import Search from './pages/Search/Search'
import NotFound from './pages/404/404'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import AuthenticatedRoute from './hoc/AuthenticatedRoute'
import ErrorBoundary from './hoc/ErrorBoundary'
import AddMovie from './pages/Profile/MyMovies/AddMovie/AddMovie'
import EditMovie from './pages/Profile/MyMovies/EditMovie/EditMovie'

const Profile = lazy(() => import('./pages/Profile/Profile'))

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const header = (
		<Header>
			<HeaderTitle />
			<Searchbar />
			<ThemeButton />
		</Header>
	)
	const content = (
		<div>
			<ErrorBoundary>
				<Suspense fallback={<p>Ładowanie...</p>}>
					<Switch>
						<AuthenticatedRoute path='/profil/filmy/edytuj/:id' component={EditMovie} />
						<AuthenticatedRoute path='/profil/filmy/dodaj' component={AddMovie} />
						<AuthenticatedRoute path='/profil' component={Profile} />
						<Route path='/filmy/:id' component={MovieRating} />
						<Route path='/wyszukaj/:term?' component={Search} />
						<Route path='/zaloguj' component={Login} />
						<Route path='/rejestracja' component={Register} />
						<Route path='/' exact component={Home} />
						<Route component={NotFound} />
					</Switch>
				</Suspense>
			</ErrorBoundary>
		</div>
	)
	const menu = <Menu />
	const footer = <Footer />

	return (
		<Router>
			<AuthContext.Provider
				value={{
					user: state.user,
					login: user => dispatch({ type: 'login', user }),
					logout: () => dispatch({ type: 'logout' }),
				}}>
				<ThemeContext.Provider
					value={{
						color: state.theme,
						changeTheme: () => dispatch({ type: 'change-theme' }),
					}}>
					<ReducerContext.Provider
						value={{
							state: state,
							dispatch: dispatch,
						}}>
						<Layout header={header} menu={menu} content={content} footer={footer} />
					</ReducerContext.Provider>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		</Router>
	)
}

export default App
