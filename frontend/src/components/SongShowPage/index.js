import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { useState } from "react";

export default function SongShowPage({songId}){
    const dispatch = useDispatch()

    const [song, setSong] = useState([])
    const [currSong, setCurrSong] = useState([])
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        async function fetchSong(){
            const res = await fetch(`/api/songs/${songId}`)
            setSong ( await res.json())
            // console.log(res)
        }
        fetchSong()
    },[songId])

    useEffect(() => {
        // console.log(song)
        // console.log(songId)
    }, [song])

    function playSong(){
        console.log(song)
        if(!playing){
            let thisSong = new Audio(song.song.mp3)
            setCurrSong(thisSong)
            thisSong.play()
        } else {
            currSong.pause()
        }
        setPlaying(!playing)
    }

    return(
        <>
            {/* {console.log(song.album)} */}
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