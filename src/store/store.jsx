import { applyMiddleware, combineReducers } from "redux"
import { deviceReducer } from "./DeviceStore"
import { userReducer } from "./UserStore"
import { createStore } from "redux"
import { basketReducer } from "./BasketStore"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { favoritStore } from "./FavoriteStore"
import { sliderReducer } from "./SliderAction"
import { produstReducer } from "./ProductAction"

const rootReducer = combineReducers({
    user: userReducer,
    device: deviceReducer,
    basket: basketReducer,
    favorit: favoritStore,
    slider: sliderReducer,
    product: produstReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )
