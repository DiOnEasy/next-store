import { useStore } from '@/hooks/useStore'
import { Loader } from '@/ui/Loader'
import { data } from 'autoprefixer'
import cn from 'clsx'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'


const Sidebar: FC = observer(() => {

	const { asPath } = useRouter();

	const {
		categoryStore: {
			initialState: { isLoading, items },
			getAllCategories
		}
	} = useStore()
	useEffect(() => {
		const fetchCategories = async () => {
			await getAllCategories()
		}
		fetchCategories()
	}, [])

	return (
		<>
			{isLoading ? (
				<Loader />
			) : data ? (
				<div className="h-screen bg-secondary pt-1 px-5 text-xl text-white">
					<p className="text-2xl mb-3">Product categories:</p>
					{items.map(item => (
						<div className={cn('my-1', {
							'text-primary' : asPath.split('/')[2] === item.slug,
							'text-white' : asPath.split('/')[2] !== item.slug
						})} key={item.id}>
							<Link href={`/category/${item.slug}`}>{item.name}</Link>
						</div>
					))}
				</div>
			) : (
				<div>Categories not found!</div>
			)}
		</>
	)
})

export default Sidebar
