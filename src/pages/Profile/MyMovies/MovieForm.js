import Input from '../../../components/Input/Input'
import { validate } from '../../../helpers/validations'
import useAuth from '../../../hooks/useAuth'
import { useEffect, useState } from 'react'
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton'

const MovieForm = props => {
	const [auth] = useAuth()
	const [loading, setLoading] = useState(false)
	const [form, setForm] = useState({
		name: {
			value: '',
			error: '',
			showError: false,
			rules: ['required', { rule: 'min', length: 4 }],
		},
		description: {
			value: '',
			error: '',
			showError: false,
			rules: ['required', { rule: 'min', length: 10 }],
		},
		date: {
			value: '',
			error: '',
			showError: false,
			rules: ['required'],
		},
		features: {
			value: [],
			error: '',
			showError: false,
		},
		image: {
			value:null,
			error: '',
			showError: false,
		},
		status: {
			value: 0,
			error: '',
			showError: false,
			rules: ['required'],
		},
		username:{
			value:''
		}
	})

	const changeHandler = (value, fieldName) => {
		const error = validate(form[fieldName].rules, value)
		setForm({
			...form,
			[fieldName]: {
				...form[fieldName],
				value,
				showError: true,
				error: error,
			},
		})
	}
	const submit = async e => {
		e.preventDefault()
		setLoading(true)

		try {
			props.onSubmit({
				name: form.name.value,
				description: form.description.value,
				date: form.date.value,
				features: form.features.value,
				image:form.image.value,
				status: form.status.value,
				user_id: auth.userId,
				username:auth.email

			})
		} catch (ex) {
			console.log(ex.response)
		}

		setLoading(false)
	}

	useEffect(() => {
		const newForm = { ...form }
		for (const key in props.movie) {
			newForm[key].value = props.movie[key]
			
		}
		setForm(newForm)
		
	}, [props.movie])

	return (
		<form onSubmit={submit}>
			<Input
				label='Nazwa'
				value={form.name.value}
				onChange={val => changeHandler(val, 'name')}
				error={form.name.error}
				showError={form.name.showError}
			/>

			<Input
				label='Opis'
				type='textarea'
				value={form.description.value}
				onChange={val => changeHandler(val, 'description')}
				error={form.description.error}
				showError={form.description.showError}
			/>

			<Input
				label='Data premiery'
				type='number'
				value={form.date.value}
				onChange={val => changeHandler(val, 'date')}
				error={form.date.error}
				showError={form.date.showError}
			/>

			<h4>Wersje językowe:</h4>
			<Input
				type='checkbox'
				value={form.features.value}
				onChange={val => changeHandler(val, 'features')}
				options={[
					{ value: 'PL', label: 'PL' },
					{ value: 'Napisy PL', label: 'Napisy PL' },
					{ value: 'EN', label: 'EN' },
					{ value: 'Subtitles EN', label: 'Subtitles EN' },
					{ value: 'DE', label: 'DE' },
					{ value: 'Untertitel DE', label: 'Untertitel DE' },
				]}
				error={form.features.error}
				showError={form.features.showError}
			/>

			<h4>Zdjęcie</h4>
			<Input
				type='file'
				value={form.image.value}
				onChange={val => changeHandler(val, 'image')}
				error={form.image.error}
				showError={form.image.showError}
			/>

			<h4>Status</h4>
			<Input
				type='radio'
				name='status'
				value={form.status.value}
				onChange={val => changeHandler(val, 'status')}
				options={[
					{ value: '1', label: 'Dostępny' },
					{ value: '0', label: 'Niedostępny' },
				]}
				error={form.status.error}
				showError={form.status.showError}
			/>

			<div className='text-right'>
				<LoadingButton loading={loading} className='btn-success'>
					{props.buttonText}!
				</LoadingButton>
			</div>
		</form>
	)
}

export default MovieForm
