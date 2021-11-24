import { NEW_MUSIC, FETCH_MUSICS, REMOVE_MUSIC, UPDATE_MUSIC } from './types';

export const newMusic = musicData => dispatch => {
    console.log(dispatch)
    fetch('http://localhost:3001/musics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(musicData)
    })
    .then(response => response.json())
    .then(singular => {
        console.log(singular)
        return dispatch({
            type: NEW_MUSIC,
            payload: singular
        })
    }
    );
};


export const fetchMusics = (id) => dispatch => {
    fetch('http://localhost:3001/musics')
    .then(response => response.json())
    .then(plural => dispatch({ type: FETCH_MUSICS, payload: plural }))
}


export const deleteMusic = id => dispatch => {
    console.log(dispatch)
    fetch(`http://localhost:3001/musics/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })
    .then(response => response.json())
    .then(singular => {
        console.log(singular)
        return dispatch({
            type: REMOVE_MUSIC,
            payload: singular
        })
    }
    );
};

export const updateMusic = id => dispatch => {
    console.log(dispatch)
    fetch(`http://localhost:3001/musics/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })
    .then(response => response.json())
    .then(singular => {
        console.log(singular)
        return dispatch({
            type: UPDATE_MUSIC,
            payload: singular
        })
    }
    );
};