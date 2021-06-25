import axios from 'axios'
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

    ARTICLES_UPDATE_REQUEST,
    ARTICLES_UPDATE_SUCCESS,
    ARTICLES_UPDATE_FAIL,

} from '../constants/articlesConstants'


export const listArticles = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: ARTICLES_LIST_REQUEST })

        const { data } = await axios.get('http://127.0.0.1:8000/api/ARTICLES/ARTICLES-list')

        dispatch({
            type: ARTICLES_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ARTICLES_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listArticleSDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ARTICLES_DETAILS_REQUEST })

        const { data } = await axios.get(`http://127.0.0.1:8000/api/ARTICLES/ARTICLES-list/${id}`)

        dispatch({
            type: ARTICLES_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ARTICLES_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const deleteArticles = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ARTICLES_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/ARTICLES/ARTICLES-list/${id}/`,
            config
        )

        dispatch({
            type: ARTICLES_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: ARTICLES_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




export const createArticles = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ARTICLES_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `http://127.0.0.1:8000/api/ARTICLES/ARTICLES-list`,
            {},
            config
        )
        dispatch({
            type: ARTICLES_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: ARTICLES_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const updateArticles = (ARTICLES) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ARTICLES_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `http://127.0.0.1:8000/api/ARTICLES/ARTICLES-list/${id}/`,
            ARTICLES,
            config
        )
        dispatch({
            type: ARTICLES_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: ARTICLES_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ARTICLES_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
