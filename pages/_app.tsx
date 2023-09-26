import '@/assets/styles/globals.scss'
import { RootStoreContext } from '@/hooks/useStore'
import RootStore from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'


const queryClient = new QueryClient()


export default function App({Component, pageProps}:AppProps){


    return(
        <QueryClientProvider client={queryClient}>
        <RootStoreContext.Provider value={new RootStore}>
        <Component{...pageProps} />
        </RootStoreContext.Provider>
        </QueryClientProvider>
    )

}