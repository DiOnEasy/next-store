import Link from 'next/link'
import { FC } from 'react'
import { TbCat } from 'react-icons/tb'

const Error404: FC = () => {
	return(
	<div className="flex h-screen items-center flex-col justify-center">
		<p className="text-3xl font-semibold">Page is not found!</p>
		<p className="text-5xl">
			<TbCat />
		</p>
		<Link className="hover:text-primary text-2xl underline" href={`/`}>
			Go home!
		</Link>
	</div>)
}

export default Error404
