import { NEW_MUSIC, FETCH_MUSICS, REMOVE_MUSIC } from '../actions/types';
// UPDATE_MUSIC
const initialState = { group: [], };

function musicReducer(state = initialState, action) {
    switch(action.type) {
        case NEW_MUSIC:
            let list = state.group;
            list.push(action.payload);
            return { ...state, group: list }
        case FETCH_MUSICS:
            let listofmusic = action.payload;
            return { ...state, group: listofmusic };
        // case UPDATE_MUSIC:
            // filter out old
        case REMOVE_MUSIC:
            let filteredlist = state.group.filter( tune => {
                return tune.id !== action.payload.id })
            return { ...state, group: filteredlist }
        default:
            return state;
    }
}

export default musicReducer;