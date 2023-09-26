import { useStore } from '@/hooks/useStore'
import { IEmailPassword } from '@/store/user/user.interface'
import Heading from '@/ui/Heading'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import { observer } from 'mobx-react-lite'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailValidator } from './email-validator'

const Auth: FC = observer(() => {
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		userStore: { login, register }
	} = useStore()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') {
			login(data)
		} else {
			register(data)
		}
		reset()
	}

	return (
		<>
		<section className='flex h-screen'>
			<form onSubmit={handleSubmit(onSubmit)} className='rounded-lg bg-white shadom-sm p-8 m-auto'>
			<Heading className="capitalize text-center mb-5">{type}</Heading>

			<Field
				{...formRegister('email', {
					required: 'Email is required',
					pattern: {
						value: emailValidator,
						message: 'Your email is not valid'
					}
				})}
				placeholder="Email"
				error={errors.email?.message}
			/>
			<Field
				{...formRegister('password', {
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Your password has to be at least 6 symbols long'
					}
				})}
				type='password'
				placeholder="Password"
				error={errors.password?.message}
			/>
				<Button variant="white">{type}</Button>
			</form>
			</section>
		</>
	)
})

export default Auth
