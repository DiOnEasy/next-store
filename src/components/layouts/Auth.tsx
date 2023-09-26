import { useStore } from '@/hooks/useStore'
import { IEmailPassword } from '@/store/user/user.interface'
import Heading from '@/ui/Heading'
import Button from '@/ui/button/Button'
import { observer } from 'mobx-react-lite'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const Auth: FC = observer(() => {
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		userStore: { login, register }
	} = useStore()


	const {
		register: formRegister,
		handleSubmit,
		formState,
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
			<Heading className='capitalize'>{type}</Heading>
			<Button variant="white">{type}</Button>
		</>
	)
})

export default Auth
