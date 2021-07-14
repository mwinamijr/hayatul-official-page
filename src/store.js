import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    articlesListReducer,
    articlesDetailsReducer,
    articlesDeleteReducer,
    articlesCreateReducer,
    articlesUpdateReducer,
} from './store/reducers/articlesReducers'
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer
} from './store/reducers/userReducers'


const reducer = combineReducers({
    articleList: articlesListReducer,
    articleDetails: articlesDetailsReducer,
    userLogin: userLoginReducer,
    
    articleDelete: articlesDeleteReducer,
    articleCreate: articlesCreateReducer,
    articleUpdate: articlesUpdateReducer,
    
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    
    /*
    
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
    */
})


const ArticlesListFromStorage = localStorage.getItem('articlesList') ?
    JSON.parse(localStorage.getItem('articlesList')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null
/*

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

*/
const initialState = {
    articles: {
        articlesList: ArticlesListFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store