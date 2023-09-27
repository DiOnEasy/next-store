import cartStore from "./cart/cart.store"
import userStore from "./user/user.store"

class RootStore {
    userStore = userStore
    cartStore = cartStore

}

export default RootStore