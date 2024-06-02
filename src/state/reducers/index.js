import productsReducer from './products'
import cartReducer from './cart'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
})

export default rootReducer