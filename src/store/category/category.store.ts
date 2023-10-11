import { CategoryService } from '@/services/category.service'
import { ICategory } from '@/types/category.interface'
import { makeAutoObservable } from 'mobx'

interface ICategoryStore {
	items: ICategory[]
	isLoading: boolean
}

class CategoryStore {
	initialState: ICategoryStore = {
		items: [],
		isLoading: false
	}

	constructor() {
		makeAutoObservable(this)
	}

	getAllCategories = async () => {
		try {
			this.initialState.isLoading = true
			const response = await CategoryService.getAll()
			this.initialState.items = response.data
			this.initialState.isLoading = false
		} catch (err) {
			throw err
		}
	}
}

export default new CategoryStore()
