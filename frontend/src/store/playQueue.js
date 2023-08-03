import { useEffect, useState } from "react";

export default function playQueue({song}){
    [currSong, setCurrSong] = useState("")

    useEffect(() => {
        setCurrSong(song)
    }, [song])

    return function currentSong(song){
        return song;
    }
}