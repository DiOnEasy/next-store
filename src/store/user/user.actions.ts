import { errorCatch } from '@/api/api.helper'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import { IAuthResponse, IEmailPassword } from './user.interface'

	

	export const registerAction = async (data: IEmailPassword): Promise<IAuthResponse> => {
		try {
			const response = await AuthService.main('register', data)
			return response
		} catch (err) {
			throw err
		}
	}

	export const loginAction = async (data: IEmailPassword): Promise<IAuthResponse> => {
		try {
			const response = await AuthService.main('login', data)
			return response
		} catch (err) {
			throw err
		}
	}

	export const logoutAction = () => {
		removeFromStorage()
	}

	export const checkAuthAction = async (): Promise<IAuthResponse> => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (err) {
			if (errorCatch(err) === 'jwt expired') {
				logoutAction()
			}
			throw err
		}
	}

