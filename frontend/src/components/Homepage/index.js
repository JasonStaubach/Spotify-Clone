
import { useEffect, useState } from "react";
// import { Window } from "react-dom";
import HeaderBar from "../HeaderBar";
import SideBar from "../SideBar";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage(){
    const dispatch = useDispatch()
    
    const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0});
	
    const mouseMoveHandler = (e) => {
        setMouseCoordinates({
            x:e.clientX,
            y:e.clientY
    	});
    }
    useEffect(()=>{
        window.addEventListener('mousemove', mouseMoveHandler);
        resizer()
    	return(()=>{
            window.removeEventListener('mousemove', mouseMoveHandler);
    	})
    }, [])
    
    const resizer = () => {
        // const window = window
        let leftBarSize = Math.random()*30 + 20
        let homepage = document.getElementById("home-page").offsetWidth
        console.log(`${mouseCoordinates.x} ${mouseCoordinates.y}`)
        console.log(`${homepage}`)
        // debugger
        let element = document.getElementById("home-page-right");
        element.style.width = `${homepage - mouseCoordinates.x}px`;
        element = document.getElementById("side-bar")
        element.style.width = `${mouseCoordinates.x}px`;
        let elements = document.getElementsByClassName("header-bar");
        let arrEle = [...elements]
        arrEle.forEach(element => {
            element.style.width = `${homepage - mouseCoordinates.x}}px`;     
        });
    }

    return(
        <>
            <div id="home-page">
                <div id="fixed-page">
                    <SideBar/>
                    <div className="resizer-bar" onMouseDown={resizer}/>
                    <div id="home-page-right">
                        <HeaderBar/>
                    </div>
                </div>
            </div>
        </>
    )

}
    