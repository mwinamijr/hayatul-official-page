import {
    ARTICLES_LIST_REQUEST,
    ARTICLES_LIST_SUCCESS,
    ARTICLES_LIST_FAIL,

    ARTICLES_DETAILS_REQUEST,
    ARTICLES_DETAILS_SUCCESS,
    ARTICLES_DETAILS_FAIL,

    ARTICLES_DELETE_REQUEST,
    ARTICLES_DELETE_SUCCESS,
    ARTICLES_DELETE_FAIL,

    ARTICLES_CREATE_REQUEST,
    ARTICLES_CREATE_SUCCESS,
    ARTICLES_CREATE_FAIL,
    ARTICLES_CREATE_RESET,

    ARTICLES_UPDATE_REQUEST,
    ARTICLES_UPDATE_SUCCESS,
    ARTICLES_UPDATE_FAIL,
    ARTICLES_UPDATE_RESET,
    
} from '../constants/articlesConstants'


export const articlesListReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
        case ARTICLES_LIST_REQUEST:
            return { loading: true, ARTICLES: [] }

        case ARTICLES_LIST_SUCCESS:
            return {
                loading: false,
                ARTICLES: action.payload.articles,
                
            }

        case ARTICLES_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const articlesDetailsReducer = (state = { articles: { reviews: [] } }, action) => {
    switch (action.type) {
        case ARTICLES_DETAILS_REQUEST:
            return { loading: true, ...state }

        case ARTICLES_DETAILS_SUCCESS:
            return { loading: false, articles: action.payload }

        case ARTICLES_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const articlesDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTICLES_DELETE_REQUEST:
            return { loading: true }

        case ARTICLES_DELETE_SUCCESS:
            return { loading: false, success: true }

        case ARTICLES_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const articlesCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTICLES_CREATE_REQUEST:
            return { loading: true }

        case ARTICLES_CREATE_SUCCESS:
            return { loading: false, success: true, articles: action.payload }

        case ARTICLES_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case ARTICLES_CREATE_RESET:
            return {}

        default:
            return state
    }
}


export const articlesUpdateReducer = (state = { articles: {} }, action) => {
    switch (action.type) {
        case ARTICLES_UPDATE_REQUEST:
            return { loading: true }

        case ARTICLES_UPDATE_SUCCESS:
            return { loading: false, success: true, articles: action.payload }

        case ARTICLES_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case ARTICLES_UPDATE_RESET:
            return { articles: {} }

        default:
            return state
    }
}

