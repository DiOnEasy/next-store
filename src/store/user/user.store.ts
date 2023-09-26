import { getLocalStorage } from '@/utils/local-storage'
import { makeAutoObservable } from 'mobx'
import {
	checkAuthAction,
	loginAction,
	logoutAction,
	registerAction
} from './user.actions'
import { IEmailPassword, IInitialState } from './user.interface'

class UserStore {
	initialState: IInitialState = {
		user: getLocalStorage('user'),
		isLoading: false
	}

	constructor() {
		makeAutoObservable(this)
	}

	register = async (data: IEmailPassword) => {
		try {
			this.initialState.isLoading = true
			const response = await registerAction(data)
			this.initialState.user = response.user
			this.initialState.isLoading = false
		} catch (err) {
			throw err
		}
	}

	login = async (data: IEmailPassword) => {
		try {
			this.initialState.isLoading = true
			const response = await loginAction(data)
			this.initialState.user = response.user
			this.initialState.isLoading = false
		} catch (err) {
			throw err
		}
	}

	logout = () => {
		logoutAction()
	}

	checkAuth = async () => {
		try {
			this.initialState.isLoading = true
			const response = await checkAuthAction()
			this.initialState.user = response.user
			this.initialState.isLoading = false
		} catch (err) {
			throw err
		}
	}
}
export default new UserStore()
