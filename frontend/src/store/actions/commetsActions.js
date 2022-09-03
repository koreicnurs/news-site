import axiosApi from "../../axiosApi";

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';

const fetchCommentsRequest = () => ({type: FETCH_COMMENTS_REQUEST});
const fetchCommentsSuccess = news => ({type: FETCH_COMMENTS_SUCCESS, payload: news});
const fetchCommentsFailure = error => ({type: FETCH_COMMENTS_FAILURE, payload: error});

const createCommentRequest = () => ({type: CREATE_COMMENT_REQUEST});
const createCommentSuccess = () => ({type: CREATE_COMMENT_SUCCESS});
const createCommentFailure = error => ({type: CREATE_COMMENT_FAILURE, payload: error});

const deleteCommentRequest = () => ({type: DELETE_COMMENT_REQUEST});
const deleteCommentSuccess = () => ({type: DELETE_COMMENT_SUCCESS});
const deleteCommentFailure = error => ({type: DELETE_COMMENT_FAILURE, payload: error});

export const getComments = () => {
    return async dispatch => {
        try {
            dispatch(fetchCommentsRequest());

            const response = await axiosApi('/comments');

            dispatch(fetchCommentsSuccess(response.data));
        } catch (e) {
            dispatch(fetchCommentsFailure(e.message));
        }
    }
};

export const createComment = (data) => {
    return async dispatch => {
        try {
            dispatch(createCommentRequest());
            await axiosApi.post('/comments', data);
            dispatch(createCommentSuccess());
        } catch (e) {
            dispatch(createCommentFailure(e.message));
            throw e;
        }
    }
};

export const deleteComment = (id) => {
    return async dispatch => {
        try {
            dispatch(deleteCommentRequest());
            await axiosApi.delete(`/comments/${id}`);
            dispatch(deleteCommentSuccess());
        } catch (e) {
            dispatch(deleteCommentFailure(e.message));
            throw e;
        }
    }
};
