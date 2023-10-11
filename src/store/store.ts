import cartStore from "./cart/cart.store"
import categoryStore from "./category/category.store"
import userStore from "./user/user.store"

class RootStore {
    userStore = userStore
    cartStore = cartStore
    categoryStore = categoryStore
}

export default RootStore