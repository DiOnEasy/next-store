import { FC } from 'react'

const Sidebar: FC = () => {
	// const { data, isLoading, error } = useQuery(
	// 	['get categories'],
	// 	() => CategoryService.getAll(),
	// 	{
	// 		select: ({ data }) => data
	// 	}
	// )

	return (
		<>
			{/* {isLoading ? (
				<Loader />
			) : data ? ( */}
				<div className="h-screen bg-secondary rounded-xl">Sidebar</div>
			{/* ) : (
				<div>Categories not found!</div>
			)} */}
		</>
	)
}

export default Sidebar
