import '@/assets/styles/globals.scss'
import { RootStoreContext } from '@/hooks/useStore'
import RootStore from '@/store/store'
import type { AppProps } from 'next/app'
export default function App({Component, pageProps}:AppProps){


    return(
        <RootStoreContext.Provider value={new RootStore}>
        <Component{...pageProps} />
        </RootStoreContext.Provider>
    )

}