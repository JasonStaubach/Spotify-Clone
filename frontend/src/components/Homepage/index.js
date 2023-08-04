
import { useEffect, useRef, useState } from "react";
// import { Window } from "react-dom";
import HeaderBar from "../HeaderBar";
import SideBar from "../SideBar";
import SongShowPage from "../SongShowPage"
import AudioBar from "../AudioBar";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage(){
    const dispatch = useDispatch()
    
    // const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0});

    const homepageRef = useRef(null);
    const homepageRightRef = useRef(null);
    const resizeBarRef = useRef(null);
    const sideBarRef = useRef(null);
    const headBarRef = useRef(null);
    const invisHeadBarRef = useRef(null);

    const handleDrag = (e) => {
        // console.log("Draggin");
        // console.log(`x: ${e.clientX}, y: ${e.clientY}`);
        
        if (e.clientX > 0){
            // console.log(`${e.clientX} px`);
            homepageRightRef.current.style.width = `${window.innerWidth - e.clientX}px`;
            headBarRef.current.style.width = `${(window.innerWidth - e.clientX) * 0.95}px`;
            invisHeadBarRef.current.style.width = `${(window.innerWidth - e.clientX) * 0.95}px`;
            sideBarRef.current.style.width = `${e.clientX}px`;
        }
    };

    return(
        <>
            <div id="home-page" ref={homepageRef}>
                <div id="fixed-page">
                    <SideBar sideBarRef={sideBarRef}/>
                    <div className="resizer-bar"
                        draggable="true"
                        ref={resizeBarRef}
                        onDrag={handleDrag}
                        />
                    <div id="home-page-right" ref={homepageRightRef}>
                        <HeaderBar headBarRef={headBarRef} invisHeadBarRef={invisHeadBarRef}/>
                        <div id="homepage-display">
                            <div id="inner-homepage-display">
                            <p className="row-title" value="Recommended For You">Recommended For You</p>
                            <div className="homepage-row">
                                <SongShowPage songId={1}/>
                                <SongShowPage songId={2}/>
                                <SongShowPage songId={3}/>
                                <SongShowPage songId={4}/>
                                <SongShowPage songId={5}/>
                            </div>
                            <p className="row-title" id="row-2-title"> Demo Album: Rihanna</p>
                            <div className="homepage-row" >
                                <SongShowPage songId={6}/>
                                <SongShowPage songId={7}/>
                                <SongShowPage songId={8}/>
                                <SongShowPage songId={9}/>
                                <SongShowPage songId={10}/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {sessionStorage.songId === "1" ? console.log("hi") : null}
                {sessionStorage.songId === `1` && <AudioBar/>}
            </div>
        </>
    )

}
    