import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { ingredientReducer } from "../Admin/Ingredients/Reducer";
import restaurantsOrderReducer from "../Admin/Order/restaurants.order.reducer";
import authReducer from "../Authentication/Reducer";
import cartReducer from "../Customers/Cart/Reducer";
import menuItemReducer from "../Customers/Menu/Reducer";
import { orderReducer } from "../Customers/Orders/order.reducer";
import restaurantReducer from "../Customers/Restaurant/Reducer";
import superAdminReducer from '../SuperAdmin/superAdmin.reducer';


const rootReducer=combineReducers({

    auth:authReducer,
    restaurant:restaurantReducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer,

    // admin
    restaurantsOrder:restaurantsOrderReducer,
    ingredients:ingredientReducer,

    // super admin
    superAdmin:superAdminReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))