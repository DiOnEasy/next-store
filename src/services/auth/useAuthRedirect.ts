import { useStore } from '@/hooks/useStore'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAuthRedirect = () => {
	const {
		userStore: {
			initialState: { user }
		}
	} = useStore()

	const { replace } = useRouter()

	useEffect(() => {
		if (user) replace('/')
	}, [user])
}
