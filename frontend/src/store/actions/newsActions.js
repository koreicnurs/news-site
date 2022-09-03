import axiosApi from "../../axiosApi";

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const CREATE_NEWS_REQUEST = 'CREATE_NEWS_REQUEST';
export const CREATE_NEWS_SUCCESS = 'CREATE_NEWS_SUCCESS';
export const CREATE_NEWS_FAILURE = 'CREATE_NEWS_FAILURE';

const fetchImageBoardsRequest = () => ({type: FETCH_NEWS_REQUEST});
const fetchImageBoardsSuccess = news => ({type: FETCH_NEWS_SUCCESS, payload: news});
const fetchImageBoardsFailure = error => ({type: FETCH_NEWS_FAILURE, payload: error});

const createImageBoardRequest = () => ({type: CREATE_NEWS_REQUEST});
const createImageBoardSuccess = () => ({type: CREATE_NEWS_SUCCESS});
const createImageBoardFailure = error => ({type: CREATE_NEWS_FAILURE, payload: error});

export const getNews = () => {
    return async dispatch => {
        try {
            dispatch(fetchImageBoardsRequest());

            const response = await axiosApi('/news');

            dispatch(fetchImageBoardsSuccess(response.data));
        } catch (e) {
            dispatch(fetchImageBoardsFailure(e.message));
        }
    }
};

export const createNews = (data) => {
    return async dispatch => {
        try {
            dispatch(createImageBoardRequest());
            await axiosApi.post('/news', data);
            dispatch(createImageBoardSuccess());
        } catch (e) {
            dispatch(createImageBoardFailure(e.message));
            throw e;
        }
    }
};