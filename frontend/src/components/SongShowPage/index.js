import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function SongShowPage(){
    const dispatch = useDispatch()

    const [artist, setArtist] = useState([])

    useEffect(() => {
        async function fetchArtist(){
            const res = await fetch("/api/artists/1")
            setArtist ( await res.json())
            // console.log(res)
        }
        fetchArtist()
    },[])


    return(
        <>
            <div className="song-container">
                <div className="song-cover">
                    <img src={artist.photo}/>
                </div>
                <p className="song-title">Song Name</p>
                <p className="artist-name-song">{artist.name}</p>
            </div>
            {console.log(artist)}
        </>
    )

}