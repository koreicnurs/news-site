import axiosApi from "../../axiosApi";

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const CREATE_NEWS_REQUEST = 'CREATE_NEWS_REQUEST';
export const CREATE_NEWS_SUCCESS = 'CREATE_NEWS_SUCCESS';
export const CREATE_NEWS_FAILURE = 'CREATE_NEWS_FAILURE';

const fetchImageBoardsRequest = () => ({type: FETCH_IMAGEBOARDS_REQUEST});
const fetchImageBoardsSuccess = imageBoards => ({type: FETCH_IMAGEBOARDS_SUCCESS, payload: imageBoards});
const fetchImageBoardsFailure = error => ({type: FETCH_IMAGEBOARDS_FAILURE, payload: error});

const createImageBoardRequest = () => ({type: CREATE_NEWS_REQUEST});
const createImageBoardSuccess = () => ({type: CREATE_NEWS_SUCCESS});
const createImageBoardFailure = error => ({type: CREATE_NEWS_FAILURE, payload: error});

export const getImageBoards = () => {
    return async dispatch => {
        try {
            dispatch(fetchImageBoardsRequest());

            const response = await axiosApi('/board');

            dispatch(fetchImageBoardsSuccess(response.data));
        } catch (e) {
            dispatch(fetchImageBoardsFailure(e.message));
        }
    }
};

export const createImageBoard = (boardData) => {
    return async dispatch => {
        try {
            dispatch(createImageBoardRequest());
            await axiosApi.post('/board', boardData);
            dispatch(createImageBoardSuccess());
        } catch (e) {
            dispatch(createImageBoardFailure(e.message));
            throw e;
        }
    }
};