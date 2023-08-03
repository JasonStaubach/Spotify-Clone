import React from "react";
import {useState, useEffect, useRef} from "react";
import { fetchCurrentSong } from "../../store/songs";
import { useDispatch } from "react-redux";


export default function AudioBar(){
    const dispatch = useDispatch();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(-1);
    const [volume, setVolume] = useState(0.5)

    const progressBar = useRef();
    const audioPlayer = useRef();
    const volumeSlider = useRef();

    //set current song
    useEffect(() => {
        dispatch(fetchCurrentSong(sessionStorage.songId))
        setCurrentTrack(sessionStorage.songId)

    },[sessionStorage.songId])


    function playSong(){
        currentTrack.play()
    }
    


    return (
        <div className="audio-bar-outer">
            <div>
            <audio src={"idk yet"} id="audioPlayer" ref={audioPlayer}></audio>

            <div className="current-track-info">
                {"Track Info"}
            </div>

            </div>

            <div className="bar-controls">
                <div className="control-top">

                    <div > 
                        <span className="material-symbols-outlined">skip</span>
                    </div>
                    <div className="play-pause" >
                        {isPlaying ? <span onClick={() => setIsPlaying(false)} className="material-symbols-outlined">pause_circle</span> :
                        <span onClick={() => setIsPlaying(true)} className="material-symbols-outlined">play_circle</span> }    
                    </div>
                    <div className="skip-button"><span className="material-symbols-outlined">skip</span></div>
                </div>
                <div className="control-bottom">

                    <div className="current-time">{"00:00"}</div>

                    <div>
                        <input type="range" ref={progressBar} className="songBar"/>
                    </div>
    
                    <div className="duration"> {"00:00"}</div>
                </div>
                
        

            </div>

            <div className="volume-controls"> 
            <div className="volume-mute">
                {volume === 0 ? <span className="material-symbols-outlined">volume_off</span>  :
                <span className="material-symbols-outlined">volume_up</span>
                }
            </div>
                <input type="range" ref={volumeSlider} className="volume" defaultValue={80} min={0} max={100}  onChange={(e) => setVolume(e.target.value/100)} />
            </div>

        </div>
    )

}
