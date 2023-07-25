
import HeaderBar from "../HeaderBar"
import SideBar from "../SideBar"

export default function StickyBar(){
    return(
        <div id="stickyBar">
            <SideBar/>
            <div className="resizer-bar"/>
            <HeaderBar/>
        </div>
    )

}