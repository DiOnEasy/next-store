import { useStore } from '@/hooks/useStore'
import { useAuthRedirect } from '@/services/auth/useAuthRedirect'
import { IEmailPassword } from '@/store/user/user.interface'
import Heading from '@/ui/Heading'
import { Loader } from '@/ui/Loader'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import { observer } from 'mobx-react-lite'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailValidator } from './email-validator'

const Auth: FC = observer(() => {

	useAuthRedirect()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		userStore: {
			login,
			register,
			initialState: { isLoading }
		}
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
			<section className="flex h-screen">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className=" rounded-lg bg-white shadom-sm p-8 m-auto"
				>
					<Heading className="capitalize text-center mb-5">{type}</Heading>
					{isLoading ? (
						<Loader />
					) : (
						<>
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
								type="password"
								placeholder="Password"
								error={errors.password?.message}
							/>
							<Button className="m-auto block px-10" variant="orange">
								{type}
							</Button>
								<span className='text-lg'>{type === 'login' ? 'Don`t have an account: ' : 'Do you have an account: '}</span>
							<button type='button' className='text-lg px-5 py-0.5 inline-block opacity-50 mt-5 '
								onClick={() => setType(type === 'login' ? 'register' : 'login')}
							>
								{type === 'login' ? 'Register' : 'Login'}
							</button>
						</>
					)}
				</form>
			</section>
		</>
	)
})

export default Auth
