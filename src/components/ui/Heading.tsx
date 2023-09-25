import { FC, PropsWithChildren } from 'react'

interface IHeading {
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
	return (
		<h1
			className={`font-semibold text-2xl ${className}`}
		>
			{children}
		</h1>
	)
}

export default Heading