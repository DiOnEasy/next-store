import { useStore } from '@/hooks/useStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Search from './Search'
import Cart from './cart/Cart'

const Header: FC = () => {
	const [isClient, setIsClient] = useState(false)

	const { pathname } = useRouter()

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) {
		return null // Если рендерится на сервере, то возвращаем null
	}

	const {
		userStore: {
			initialState: { user, isLoading }
		}
	} = useStore()

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

			{user ? (
				<div className="ml-auto px-3 w-1/2 flex items-center justify-around">
					<Link className="text-4xl text-white" href={'/favorites'}>
						{pathname === '/favorites' ? <AiFillHeart /> : <AiOutlineHeart />}
					</Link>
					<Cart />
					<Link href={'/'}>
						<Image
							className="rounded-3xl border border-primary"
							width={40}
							height={0}
							src={user.avatarPath}
							alt="Avatar"
						/>
					</Link>
				</div>
			) : (
				<div>
					<Link href={'/auth'}>
						Login
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header
