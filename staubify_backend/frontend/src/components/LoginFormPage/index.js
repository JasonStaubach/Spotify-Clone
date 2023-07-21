import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionFunctions from '../../store/session'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom"



export default function LoginFormPage(){
    const dispatch = useDispatch()
    const history = useHistory()
    
    const [username, setCredential] = useState('')
    const [password, setPassword] = useState('')
    
    const sessionUser = useSelector(state => state.session.user)
    if (sessionUser) <Redirect to="/" />
    
    function handleSubmit(e){
        e.preventDefault()
        // debugger
        dispatch(sessionFunctions.login({username, password})).then(() => history.push("/"))
        
        // return redirect("/")
        //error handling later
    }

   
    
    return(
        <form onSubmit={handleSubmit}>
            <label id="login-username"> Username/Email
                <input type="text" value={username} onChange={(e) => setCredential(e.target.value)}/>
            </label>

            <label id="login-password"> Password
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <button type="submit">Log In</button>
        </form>
    )
}