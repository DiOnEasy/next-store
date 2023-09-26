import RootStore from "@/store/store";
import { createContext, useContext } from "react";

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStore = () => {
    const context = useContext(RootStoreContext)
    if(context === null) {
        throw new Error('')
    }
    return context
}