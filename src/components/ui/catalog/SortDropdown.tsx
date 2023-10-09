import { EnumProductSort } from '@/services/product/product.types'
import { FC } from 'react'

const SortDropdown: FC = () => {
	return (
		<div className='text-right mr-10 mb-3'>
			<select className='text-lg py-2 px-4 bg-secondary text-white rounded-lg' name="" id="">
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => (
					<option>{EnumProductSort[key]}</option>
				))}
			</select>
		</div>
	)
}

export default SortDropdown
