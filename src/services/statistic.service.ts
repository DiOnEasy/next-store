import { instance } from '@/api/api.interceptor'
import { IReview } from '@/types/review.interface'

const STATISTIC = 'statistic'

export type TypeStatisticResponse = {
	name: string
	value: number
}

export const StatisticService = {
	async getMain() {
		return instance<TypeStatisticResponse>({
			url: STATISTIC,
			method: 'GET'
		})
	}

}
