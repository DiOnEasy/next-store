import { useProfile } from '@/hooks/useProfile'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'
import { FC } from 'react'

const Favorites: FC = () => {

const user = useProfile()
console.log(user)
	return (
		<Layout>
			<Catalog products={user.profile?.favorites || []} title="Your favorites products" />
		</Layout>
	)
}

export default Favorites
