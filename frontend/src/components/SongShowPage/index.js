import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        fetchArtist()
    },[songId])

    useEffect(() => {
        console.log(song.album)
        // console.log(songId)
    }, [song])

    // function playSong(){
    //     dispatch(currentSong(song));
    //   };

    return(
        <>
            {/* {console.log(song)} */}
            <div className="song-container" /*onClick={playSong()}*/ >
                <div className="song-cover">
                    <img src={song.photo}/>
                </div>
                <p className="song-title">{song.name}</p>
                <p className="artist-name-song">{song.albumId}</p>
            </div>
        </>
    )

}