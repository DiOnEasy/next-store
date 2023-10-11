import { useStore } from '@/hooks/useStore'
import { Loader } from '@/ui/Loader'
import { data } from 'autoprefixer'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { FC, useEffect } from 'react'

const Sidebar: FC = observer(() => {
	const {
		categoryStore: { initialState:{isLoading, items}, getAllCategories }
	} = useStore()
	useEffect(()=>{
		const fetchCategories = async() => {
			await getAllCategories()
		}
		fetchCategories()
	}, [])

	return (
		<>
			 {isLoading ? (
				<Loader />
			) : data ? ( 
			<div className="h-screen bg-secondary rounded-xl">
				{items.map(item => (
					<p>
					<Link href={`/category/${item.slug}`}>{item.name}</Link>
					</p>
				))}
			</div>
			 ) : (
				<div>Categories not found!</div>
			)} 
		</>
	)
})

export default Sidebar
