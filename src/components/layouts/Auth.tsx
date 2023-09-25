import Heading from '@/ui/Heading'
import Button from '@/ui/button/Button'
import { FC, useState } from 'react'

const Auth: FC = () => {

	const [type, setType] = useState<'login' | 'register'>('login')



	return <>
	<Heading>Auth</Heading>
	<Button variant='white'>Button</Button>
	</>
}

export default Auth
