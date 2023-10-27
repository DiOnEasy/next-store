import { useStore } from '@/hooks/useStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Search from './Search'
import Cart from './cart/Cart'

import { FiLogIn } from 'react-icons/fi'

const Header: FC = () => {
	useEffect(() => {
		setIsClient(true)
	}, [])
	const [isClient, setIsClient] = useState(false)

	const { pathname } = useRouter()

	const {
		userStore: {
			initialState: { user, isLoading }
		}
	} = useStore()

	if (!isClient) {
		return null // Если рендерится на сервере, то возвращаем null
	}

	

	return (
		<header
			className="py-3 grid bg-secondary"
			style={{
				gridTemplateColumns: '1fr 2.5fr 1.5fr'
			}}
		>
			<Link className="py-2 px-5" href={'/'}>
				<Image
					className=""
					width={200}
					height={0}
					src="/images/logo.png"
					alt="Logo"
				/>
			</Link>
			<Search />

			<div className="ml-auto px-3 w-4/5 flex items-center justify-around">
				{user && (
					<>
					<Link className='text-white text-2xl' href={'/orders'}>My orders</Link>
					<Link className="text-4xl text-white" href={'/favorites'}>
						{pathname === '/favorites' ? <AiFillHeart /> : <AiOutlineHeart />}
					</Link>
					</>
				)}
				<Cart />
				{user ? (
					<Link href={'/'}>
						<Image
							className="rounded-3xl border border-primary"
							width={40}
							height={0}
							src={user.avatarPath}
							alt="Avatar"
						/>
					</Link>
				)
				: (
					<div className="text-right flex items-center justify-end">
						<Link
							className="flex text-primary text-2xl gap-2 items-center pr-10"
							href={'/auth'}
						>
							<FiLogIn /> Login
						</Link>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
