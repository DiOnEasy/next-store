import cn from 'clsx'
import { forwardRef } from 'react'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, className, type = 'text', style, Icon, ...rest },
		ref
	) => {
		return (
			<div className={cn('mb-3', className)}>
				<label htmlFor="">
					<span className="">
						{Icon && <Icon className="mr-3" />}
						{placeholder}:
					</span>
					<input
						className={cn(
							'px-4 py-2 w-full outline-none border border-gray focus:border-primary transition-all rounded placeholder:text-gray',
							{
								'border-red': !!error
							}
						)}
						placeholder={placeholder}
						ref={ref}
						type={type}
						{...rest}
					/>
				</label>
				{error && <div className="text-red text-sm mt-1">{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'
export default Field
