import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function SongShowPage(){
    const dispatch = useDispatch()

    const [artist, setArtist] = useState([])
    const [artist2, setArtist2] = useState([])

    useEffect(() => {
        async function fetchArtist(){
            const res = await fetch("/api/artists/1")
            setArtist ( await res.json())
            // console.log(res)
        }
        fetchArtist()
    },[])

    function playSong(){
        dispatch(setCurrentSong(song));
      };

    return(
        <>
            {console.log(artist)}
            <div className="song-container" onClick={playSong( artist.)}>
                <div className="song-cover">
                    <img src={artist.photo}/>
                </div>
                <p className="song-title">Kiss From a Rose</p>
                <p className="artist-name-song">{artist.name}</p>
            </div>
            {console.log(artist)}
            {console.log(artist)}
            <div className="song-container">
                <div className="song-cover">
                    <img src={artist2.photo}/>
                </div>
                <p className="song-title">Money Trees</p>
                <p className="artist-name-song">{artist2.name}</p>
            </div>
            {console.log(artist)}
        </>
    )

}