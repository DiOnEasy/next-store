import { EnumProductSort } from '@/services/product/product.types'
import { Dispatch, FC, SetStateAction } from 'react'

interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ setSortType, sortType }) => {
	return (
		<div className="text-right mr-10 mb-3">
			<select
            value={sortType}
            onChange={(e) => setSortType(e.target.value as any)}

				className="text-lg py-2 px-4 bg-secondary text-white rounded-lg"
				name=""
				id=""
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => (
					<option
						key={key}
						value={EnumProductSort[key]}
					>
						{EnumProductSort[key]}
					</option>
				))}
			</select>
		</div>
	)
}

export default SortDropdown
