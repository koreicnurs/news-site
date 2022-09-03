import {
    CREATE_COMMENT_FAILURE,
    CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILURE,
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS
} from "../actions/commetsActions";


const initialState = {
    comments: [],
    loading: false,
    error: null,
};

const commentsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_COMMENTS_REQUEST:
            return {...state, loading: true};
        case FETCH_COMMENTS_SUCCESS:
            return {...state, loading: false, comments: actions.payload};
        case FETCH_COMMENTS_FAILURE:
            return {...state, loading: false, error: actions.payload};

        case CREATE_COMMENT_REQUEST:
            return {...state, loading: true};
        case CREATE_COMMENT_SUCCESS:
            return {...state, loading: false};
        case CREATE_COMMENT_FAILURE:
            return {...state, loading: false, error: actions.payload};

        case DELETE_COMMENT_REQUEST:
            return {...state, loading: true};
        case DELETE_COMMENT_SUCCESS:
            return {...state, loading: false};
        case DELETE_COMMENT_FAILURE:
            return {...state, loading: false, error: actions.payload};

        default:
            return state;
    }
};

export default commentsReducer;