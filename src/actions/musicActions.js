import { NEW_MUSIC } from './types';

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