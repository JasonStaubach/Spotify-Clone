import { useDispatch, useSelector } from "react-redux";
import * as sessionFunctions from '../../store/session'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

export default function SideBar(){
    const dispatch = useDispatch()
    const history = useHistory()

    return(
        <div id="side-bar">
            
        </div>
    )

}