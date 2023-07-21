import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as sessionFunctions from '../../store/session'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";



export default function LoginFormPage(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    
    if (sessionUser) return <Redirect to="/" />
    
    function handleSubmit(e){
        e.preventDefault()
        return dispatch(sessionFunctions.login({credential, password}))

        //error handling later
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label id="login-username"> Username/Email
                <input type="text" value={credential} onChange={(e) => setCredential(e.target.value)}/>
            </label>

            <label id="login-password"> Password
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <button type="submit">Log In</button>
        </form>
    )
}