import {CHANGE_FILTER} from '../actions/filter/filterActionTypes';

const initialState = 'SHOW_ALL'

const visibility = (
    filter=initialState,
    action
) => {
    switch(action.type){
        case CHANGE_FILTER:
            return action.filter;
        default:
            return filter;
    }
}

export default visibility;
