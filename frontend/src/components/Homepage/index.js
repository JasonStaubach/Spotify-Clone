
import { useEffect, useRef, useState } from "react";
// import { Window } from "react-dom";
import HeaderBar from "../HeaderBar";
import SideBar from "../SideBar";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage(){
    const dispatch = useDispatch()
    
    const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0});

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
            console.log(`${e.clientX} px`);
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
                            <div className="homepage-row"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
    