import { useEffect, useState } from "react";

export default function playQueue({song = currSong}){
    [currSong, setCurrSong] = useState("")

    useEffect(() => {
        setCurrSong(song)
    }, [song])

    return function currentSong(){
        return song;
    }
}