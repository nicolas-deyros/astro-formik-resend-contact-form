import { useState } from 'react'
import { render } from '@react-email/render'
import SampleEmail from '../emails/SampleEmail'
import { useFormik } from 'formik'
import { BasicSchema } from '../../schemas/index'
import { motion } from 'framer-motion'
const ContactUs = () => {
	const [formSubmit, FormSubmitting] = useState(false)

	const initialValues = {
		name: '',
		email: '',
	}

	const handleSubmit = async (value, onSubmittingProps) => {
		// const formData = new FormData(values.currentTarget)
		// const { name, email, msg } = Object.fromEntries(formData)
		const formData = new FormData()
		const { name, email } = Object.fromEntries(formData)

		try {
			const res = await fetch('/api/sendEmail.json', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					from: 'ndeyros@gmail.com',
					to: 'ndeyros@gmail.com',
					subject: `Hi, prueba`,
					html: 'hmtl',
					text: 'hi text',
				}),
			})
			if (!res.ok) {
				// Handle error
				console.error('An error occurred:', res.statusText)
				return
			}
			const data = await res.json()
			console.log(data)
			onSubmittingProps.resetForm()
		} catch (error) {
			console.error(error)
		}
	}

	const formik = useFormik({
		initialValues,
		onSubmit: handleSubmit,
		validationSchema: BasicSchema,
	})

	return (
		<div className='w-full h-full flex flex-col items-center justify-center'>
			{formSubmit && (
				<motion.h3
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
					className='text-lg font-bold text-green-300'>
					Thanks, I'll be in touch
				</motion.h3>
			)}
			{!formik.isValid && (
				<motion.h3
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className='text-lg font-bold text-red-500'>
					Review your input in order to proceed
				</motion.h3>
			)}
			{!formSubmit && formik.isValid && (
				<h3 className='text-lg font-bold text-gray-500'>
					Get in touch with me:
				</h3>
			)}

			<form
				className='flex flex-col w-full md:w-2/3 mx-auto gap-1'
				onSubmit={formik.handleSubmit}
				autoComplete='off'>
				<label
					className={
						formik.errors.name && formik.touched.name
							? 'block text-red-900 text-sm font-bold animate-shaking'
							: 'block text-gray-700 text-sm font-bold'
					}
					htmlFor='name'>
					Your Name
				</label>
				<div
					className={
						formik.errors.name && formik.touched.name
							? 'flex animate-shaking'
							: 'flex'
					}>
					<input
						id='name'
						name='name'
						type='text'
						className={
							formik.errors.name && formik.touched.name
								? 'bg-red-200 border border-red-500 text-red-900 text-sm rounded-md block w-full p-2.5 placeholder-red-900'
								: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-700'
						}
						placeholder='Your name goes here'
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				{formik.errors.name && formik.touched.name && (
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className='text-red-500 font-semibold text-sm'>
						{formik.errors.name}
					</motion.span>
				)}
				<label
					className={
						formik.errors.name && formik.touched.name
							? 'block text-red-900 text-sm font-bold animate-shaking'
							: 'block text-gray-700 text-sm font-bold'
					}
					htmlFor='email'>
					Your Email
				</label>
				<div
					className={
						formik.errors.name && formik.touched.name
							? 'flex animate-shaking'
							: 'flex'
					}>
					<input
						id='email'
						name='email'
						type='email'
						className={
							formik.errors.email && formik.touched.email
								? 'bg-red-200 border border-red-500 text-red-900 text-sm  rounded-md block w-full p-2.5  placeholder-red-900'
								: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-700'
						}
						placeholder='Here goes your email'
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				{formik.errors.email && formik.touched.email && (
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className='text-red-500 font-semibold text-sm'>
						{formik.errors.email}
					</motion.span>
				)}

				<div
					className={
						formik.errors.name && formik.touched.name
							? 'flex animate-shaking'
							: 'flex'
					}></div>
				{formik.errors.msg && formik.touched.msg && (
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className='text-red-500 font-semibold text-sm'>
						{formik.errors.msg}
					</motion.span>
				)}
				<button
					type='submit'
					value='Send'
					disabled={formik.isSubmitting && !formik.isValid}
					className={
						formSubmit || !formik.isValid
							? 'text-white w-1/3 md:w-1/5 md:mt-3  bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center opacity-50'
							: 'text-white w-1/3 md:w-1/5 md:mt-3  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
					}>
					{formSubmit ? (
						<span className='flex gap-3 justify-center items-center'>
							Sending
						</span>
					) : !formik.isValid ? (
						<span className='flex gap-3 justify-center items-center'>
							<svg
								aria-hidden='true'
								className='w-5 h-5 mr-2 text-gray-200 animate-spin  fill-blue-600'
								viewBox='0 0 100 101'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
									fill='currentColor'
								/>
								<path
									d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
									fill='currentFill'
								/>
							</svg>
							Processing...
						</span>
					) : (
						<span className='flex gap-3 justify-center items-center'>Send</span>
					)}
				</button>
			</form>
		</div>
	)
}

export default ContactUs
