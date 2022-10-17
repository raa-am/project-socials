import store from '../store/index'

export default (to, from, next) => {
    if (!store.getters.cart) {
        next()
    } else {
        next('/')
    }
}
