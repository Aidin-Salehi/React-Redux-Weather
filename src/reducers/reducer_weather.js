import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // concat make a new instance but push doesn't ;)
            // return state.concat([action.payload.data]);
            //but new ver is like :)`
            return [action.payload.data, ...state];
        default:
            return state;
    }
}