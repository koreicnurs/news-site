import axiosApi from "../../axiosApi";

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const CREATE_NEWS_REQUEST = 'CREATE_NEWS_REQUEST';
export const CREATE_NEWS_SUCCESS = 'CREATE_NEWS_SUCCESS';
export const CREATE_NEWS_FAILURE = 'CREATE_NEWS_FAILURE';

export const DELETE_NEWS_REQUEST = 'DELETE_NEWS_REQUEST';
export const DELETE_NEWS_SUCCESS = 'DELETE_NEWS_SUCCESS';
export const DELETE_NEWS_FAILURE = 'DELETE_NEWS_FAILURE';

export const GET_ONE_NEWS_REQUEST = 'GET_ONE_NEWS_REQUEST';
export const GET_ONE_NEWS_SUCCESS = 'GET_ONE_NEWS_SUCCESS';
export const GET_ONE_NEWS_FAILURE = 'GET_ONE_NEWS_FAILURE';

const fetchNewsRequest = () => ({type: FETCH_NEWS_REQUEST});
const fetchNewsSuccess = news => ({type: FETCH_NEWS_SUCCESS, payload: news});
const fetchNewsFailure = error => ({type: FETCH_NEWS_FAILURE, payload: error});

const createNewsRequest = () => ({type: CREATE_NEWS_REQUEST});
const createNewsSuccess = () => ({type: CREATE_NEWS_SUCCESS});
const createNewsFailure = error => ({type: CREATE_NEWS_FAILURE, payload: error});

const deleteNewsRequest = () => ({type: DELETE_NEWS_REQUEST});
const deleteNewsSuccess = () => ({type: DELETE_NEWS_SUCCESS});
const deleteNewsFailure = error => ({type: DELETE_NEWS_FAILURE, payload: error});

const getOneNewsRequest = () => ({type: GET_ONE_NEWS_REQUEST});
const getOneNewsSuccess = news => ({type: GET_ONE_NEWS_SUCCESS, payload: news});
const getOneNewsFailure = error => ({type: GET_ONE_NEWS_FAILURE, payload: error});

export const getNews = () => {
    return async dispatch => {
        try {
            dispatch(fetchNewsRequest());

            const response = await axiosApi('/news');

            dispatch(fetchNewsSuccess(response.data));
        } catch (e) {
            dispatch(fetchNewsFailure(e.message));
        }
    }
};

export const createNews = (data) => {
    return async dispatch => {
        try {
            dispatch(createNewsRequest());
            await axiosApi.post('/news', data);
            dispatch(createNewsSuccess());
        } catch (e) {
            dispatch(createNewsFailure(e.message));
            throw e;
        }
    }
};

export const deleteNews = (id) => {
    return async dispatch => {
        try {
            dispatch(deleteNewsRequest());
            await axiosApi.delete(`/news/${id}`);
            dispatch(deleteNewsSuccess());
        } catch (e) {
            dispatch(deleteNewsFailure(e.message));
            throw e;
        }
    }
};

export const getOneNews = (id) => {
    return async dispatch => {
        try {
            dispatch(getOneNewsRequest());

            const response = await axiosApi(`/news/${id}`);

            dispatch(getOneNewsSuccess(response.data));
        } catch (e) {
            dispatch(getOneNewsFailure(e.message));
        }
    }
};