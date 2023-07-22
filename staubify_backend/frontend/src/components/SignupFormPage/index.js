import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionFunctions from '../../store/session'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom"



export default function LoginFormPage(){
    const dispatch = useDispatch()
    const history = useHistory()

    const MONTHS = [
        `January`,
        `February`,
        `March`,
        `April`,
        `May`,
        `June`,
        `July`,
        `August`,
        `September`,
        `October`,
        `November`,
        `December`
    ]

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [day, setDay] = useState(1)
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(1)

    useEffect(()=> {
        console.log(day)
    },[day])

    function handleSubmit(e){
        e.preventDefault()
        // debugger
        //dispatch(sessionFunctions.signup({username, password, email, date: Date.new(year,month,day)})).then(() => history.push("/"))
    }

        //error handling later
        return(
            <form onSubmit={handleSubmit}>
                <label id="signup-email"> What's your email address?
                    <input 
                        type="text" value={email} placeholder= 'Enter your email.' 
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </label>
                <label id="signup-username"> What should we call you?
                    <input 
                        type="text" value={username} placeholder= 'Enter a profile name.'
                        onChange={(e) => setUsername(e.target.value)}>
                    </input>
                </label>
                <label id="signup-password"> Create a password.
                    <input 
                        type="text" value={password} placeholder="Create a password."
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </label>


                <select onChange={(e) => setDay(e.target.value)}>Month
                    <option value="">Select a Month</option>
                    {MONTHS.map((month,i) => (
                        <option key = {month} value={i}>
                            {month}
                        </option>
                    ))}
                </select>
    
                <button type="submit">Sign Up</button>
            </form>
        )


}