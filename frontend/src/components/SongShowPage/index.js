import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { useState } from "react";

export default function SongShowPage({songId}){
    const dispatch = useDispatch()

    const [song, setSong] = useState([])

    useEffect(() => {
        async function fetchArtist(){
            const res = await fetch(`/api/songs/${songId}`)
            setSong ( await res.json())
            // console.log(res)
        }
        dispatch(fetchArtist)
    },[songId])

    useEffect(() => {
        console.log(song)
        // console.log(songId)
    }, [song])

    function playSong(){
        // dispatch(currentSong(song));
        // debugger
        let currSong = new Audio(song.song.mp3)
        currSong.play()
    }

    return(
        <>
            {console.log(song.album)}
            <div className="song-container" onClick={playSong}>
                <div className="song-cover">
                    <img src={song.album ? song.album.photo : null} alt="album-img"/>
                </div>
                <p className="song-title">{song.song ? song.song.name : null}</p>
                <p className="artist-name-song">{song.albumId}</p>
            </div>
        </>
    )

}