import { useStore } from '@/hooks/useStore'
import { Loader } from '@/ui/Loader'
import { data } from 'autoprefixer'
import cn from 'clsx'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { FiLogOut } from 'react-icons/fi'

const Sidebar: FC = observer(() => {
	const router = useRouter()

	const { asPath } = useRouter()

	const {
		categoryStore: {
			initialState: { isLoading, items },
			getAllCategories
		},
		userStore: {
			logout,
			initialState: { user }
		}
	} = useStore()
	useEffect(() => {
		const fetchCategories = async () => {
			await getAllCategories()
		}
		fetchCategories()
	}, [])

	const handleLogout = () => {
		router.reload()
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : data ? (
				<div
					style={{ height: 'calc(100vh - 83.750px)' }}
					className="flex flex-col h-screen bg-secondary pt-1 px-5 text-xl text-white"
				>
					<p className="text-2xl mb-3">Product categories:</p>
					{items.map(item => (
						<div
							className={cn('my-1', {
								'text-primary': asPath.split('/')[2] === item.slug,
								'text-white': asPath.split('/')[2] !== item.slug
							})}
							key={item.id}
						>
							<Link
								className="hover:text-primary"
								href={`/category/${item.slug}`}
							>
								{item.name}
							</Link>
						</div>
					))}
					{user && (
						<div className="mt-auto mb-10">
							<button
								onClick={() => {
									logout()
									handleLogout()
								}}
								className="flex items-center gap-3"
							>
								Logout <FiLogOut />
							</button>
						</div>
					)}
				</div>
			) : (
				<div>Categories not found!</div>
			)}
		</>
	)
})

export default Sidebar
