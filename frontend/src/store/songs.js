import React from "react";
import { csrfFetch } from "./csrf";

const SET_CURRENT_SONG = 'SET_CURRENT_SONG';


export function setCurrentSong(song){
    return {
        type: 'SET_CURRENT_SONG',
        data: song
      }
}

export const fetchCurrentSong = (songId) => async dispatch =>{
    const res = await csrfFetch(`api/songs/${songId}`)
    const data = await res.json();
    dispatch(setCurrentSong(data))
}


export default function songReducer(state = {}, action){
    let newState = {...state}

    switch(action.type){
        case SET_CURRENT_SONG:
            console.log(action.song)
            newState["currentSong"] = action.song
            return newState;
        default:
            return newState
    }
}