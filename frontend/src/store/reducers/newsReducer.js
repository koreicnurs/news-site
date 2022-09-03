import {
    CREATE_IMAGEBOARD_FAILURE,
    CREATE_NEW_REQUEST, CREATE_NEWS_SUCCESS,
    FETCH_IMAGEBOARDS_FAILURE,
    FETCH_IMAGEBOARDS_REQUEST,
    FETCH_IMAGEBOARDS_SUCCESS
} from "../actions/newsActions";


const initialState = {
    boards: [],
    loading: false,
    error: null,
};

const productsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_IMAGEBOARDS_REQUEST:
            return {...state, loading: true};
        case FETCH_IMAGEBOARDS_SUCCESS:
            return {...state, loading: false, boards: actions.payload};
        case FETCH_IMAGEBOARDS_FAILURE:
            return {...state, loading: false, error: actions.payload};

        case CREATE_NEW_REQUEST:
            return {...state, loading: true};
        case CREATE_NEWS_SUCCESS:
            return {...state, loading: false};
        case CREATE_IMAGEBOARD_FAILURE:
            return {...state, loading: false, error: actions.payload};
        default:
            return state;
    }
};

export default productsReducer;