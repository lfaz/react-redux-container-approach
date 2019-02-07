import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../actions/productAction';

const initialState = {
    items: [],
    loading: false,
    error: null,
    loaded: false
};

export default function productReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
                loaded: false
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.products,
                loaded: true
            };

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
                loaded: false
            };

        default:
            return state;
    }
}