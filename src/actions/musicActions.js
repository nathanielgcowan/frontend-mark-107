import { NEW_MUSIC, FETCH_MUSICS, UPDATE_MUSIC, REMOVE_MUSIC } from './types';

export const newMusic = musicData => {
    console.log(dispatch)
    fetch('http://localhost:3001/musics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(musicData)
    })
    .then(response => response.json())
    .then(music => {
        return dispatch({
            type: NEW_MUSIC,
            payload: music
        })
    });
};

export const fetchMusics = (id) => dispatch => {
    fetch('http://localhost:3001/musics')
    .then(response => response.json())
    .then(music => dispatch({
        type: FETCH_MUSICS,
        payload: music
    }))
}

export const deleteMusic = id => dispatch => {
    fetch(`http://localhost:3001/musics/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })
    .then(response => response.json())
    .then(music => {
        return dispatch({
            type: REMOVE_MUSIC,
            payload: music
        })
    });
};

export const updateMusic = id => dispatch => {
    fetch(`http://localhost:3001/musics/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })
    .then?(response => response.json())
    .then(music => {
        return dispatch({
            type: UPDATE_MUSIC,
            payload: music
        })
    })
}