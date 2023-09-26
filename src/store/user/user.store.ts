import { makeAutoObservable } from 'mobx'
import { checkAuthAction, loginAction, logoutAction, registerAction } from './user.actions'
import { IEmailPassword, IInitialState } from './user.interface'

class UserStore {
	user: IInitialState = localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user') as string)
		: null
	constructor() {
		makeAutoObservable(this)
	}
	

	register = async (data: IEmailPassword) => {
		try {
			this.user.isLoading = true
			const response = await registerAction(data)
			this.user.user = response.user
			this.user.isLoading = false
		} catch (err) {
			throw err
		}
	}

    login = async (data: IEmailPassword) => {
		try {
			this.user.isLoading = true
			const response = await loginAction(data)
			this.user.user = response.user
			this.user.isLoading = false
		} catch (err) {
			throw err
		}
	}

    logout = () =>{
        logoutAction()
    }

    checkAuth = async () => {
		try {
			this.user.isLoading = true
			const response = await checkAuthAction()
			this.user.user = response.user
			this.user.isLoading = false
		} catch (err) {
			throw err
		}
	}
}
export default new UserStore()
