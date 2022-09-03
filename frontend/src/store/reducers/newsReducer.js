import {
    CREATE_NEWS_FAILURE,
    CREATE_NEWS_REQUEST,
    CREATE_NEWS_SUCCESS, DELETE_NEWS_FAILURE, DELETE_NEWS_REQUEST, DELETE_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS
} from "../actions/newsActions";


const initialState = {
    news: [],
    loading: false,
    error: null,
};

const newsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_NEWS_REQUEST:
            return {...state, loading: true};
        case FETCH_NEWS_SUCCESS:
            return {...state, loading: false, news: actions.payload};
        case FETCH_NEWS_FAILURE:
            return {...state, loading: false, error: actions.payload};

        case CREATE_NEWS_REQUEST:
            return {...state, loading: true};
        case CREATE_NEWS_SUCCESS:
            return {...state, loading: false};
        case CREATE_NEWS_FAILURE:
            return {...state, loading: false, error: actions.payload};

        case DELETE_NEWS_REQUEST:
            return {...state, loading: true};
        case DELETE_NEWS_SUCCESS:
            return {...state, loading: false};
        case DELETE_NEWS_FAILURE:
            return {...state, loading: false, error: actions.payload};

        default:
            return state;
    }
};

export default newsReducer;