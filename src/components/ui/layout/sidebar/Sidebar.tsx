import { CategoryService } from '@/services/category.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

const Sidebar: FC = () => {

	
	const { data, isLoading } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: data => data
		}
	)

	return <div className="h-screen bg-secondary rounded-xl">Sidebar</div>
}

export default Sidebar
