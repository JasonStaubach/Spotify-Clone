
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

    const handleDrag = (e) => {
        // console.log("Draggin");
        // console.log(`x: ${e.clientX}, y: ${e.clientY}`);
        
        if (e.clientX > 0){
            console.log(`${e.clientX} px`);
            homepageRightRef.current.style.width = `${window.innerWidth - e.clientX}px`;
            headBarRef.current.style.width = `${window.innerWidth - e.clientX}px`;
            sideBarRef.current.style.width = `${e.clientX}px`;
        }
    };

    // const mouseMoveHandler = (e) => {
    //     console.log(`x: ${e.clientX}, y: ${e.clientY}`);
    //     setMouseCoordinates({
    //         x: e.clientX,
    //         y: e.clientY
    //     });
    // }

    // useEffect(()=>{
    //     // window.addEventListener('mousemove', mouseMoveHandler);
    //     // resizer()
    // 	return(()=>{
    //         window.removeEventListener('mousemove', mouseMoveHandler);
    // 	})
    // }, [])
    
    // const resizer = () => {
    //     // const window = window
    //     let leftBarSize = Math.random() * 30 + 20
    //     let homepage = document.getElementById("home-page").offsetWidth
    //     console.log(`${mouseCoordinates.x} ${mouseCoordinates.y}`)
    //     console.log(`${homepage}`)
    //     // debugger
    //     let element = document.getElementById("home-page-right");
    //     element.style.width = `${homepage - mouseCoordinates.x}px`;
    //     element = document.getElementById("side-bar")
    //     element.style.width = `${mouseCoordinates.x}px`;
    //     let elements = document.getElementsByClassName("header-bar");
    //     let arrEle = [...elements]
    //     arrEle.forEach(element => {
    //         element.style.width = `${homepage - mouseCoordinates.x}}px`;     
    //     });
    // }

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
                        <HeaderBar headBarRef={headBarRef}/>
                    </div>
                </div>
            </div>
        </>
    )

}
    