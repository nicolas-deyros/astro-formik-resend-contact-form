import * as Yup from 'yup'

const emailRules =
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const BasicSchema = Yup.object().shape({
	name: Yup.string()
		.min(4, 'Name must be at least 4 characters long')
		.max(50, 'Name must be no longer than 50 characters')
		.matches(
			/^[áéíóúÁÉÍÓÚñÑ\a-zA-Z ]+$/,
			'Name must only contain letters and spaces',
		)
		.required('Name is a required field and cannot be empty'),
	email: Yup.string()
		.email('Please enter a valid email')
		.matches(emailRules, {
			message: 'You need to add a valid email',
			excludeEmptyString: true,
		})
		.required('Email is a required field and cannot be empty'),
})
