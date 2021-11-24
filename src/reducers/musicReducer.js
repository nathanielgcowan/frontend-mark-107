import { NEW_MUSIC } from '../actions/types';

const initialState = { group: [] };

const musicReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case NEW_MUSIC:
            let list = state.bands;
            list.push(action.payload);
            return { ...state, group: list }
        default:
            return state;
    }
}

export default musicReducer;