import {CHANGE_FILTER} from './filterActionTypes';

const ShowDone = (filter) => {
    return {
        type: CHANGE_FILTER,
        filter
    }
}

export default ShowDone;