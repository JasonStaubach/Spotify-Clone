const SET_CURRENT_SONG = 'SET_CURRENT_SONG';


export function setCurrentSong(){
    return {
        type: 'SET_CURRENT_SONG',
        data: song
      }
}


export default function songReducer(state = {}, action){
    let newState = {...state}

    switch(action.type){
        case SET_CURRENT_SONG:
            newState["currentSong"] = action.song
            return newState;
        default:
            return newState
    }
}