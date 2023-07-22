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
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    useEffect(()=> {
        console.log(day)
    },[day])

    function handleSubmit(e){
        e.preventDefault()
        // debugger
        // dispatch(sessionFunctions.signup({username, password, email, date: Date.new(year,month,day)})).then(() => history.push("/"))
    }

        //error handling later
        return(
            <div className="signup-form-holder">
            <form onSubmit={handleSubmit}>
                <p>Testing Right</p>
                <label id="signup-email"> What's your email address?
                    <br/>
                    <input 
                        type="text" value={email} placeholder= 'Enter your email.' 
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </label>
                <br/>
                <label id="signup-username"> What should we call you?
                    <br/>
                    <input 
                        type="text" value={username} placeholder= 'Enter a profile name.'
                        onChange={(e) => setUsername(e.target.value)}>
                    </input>
                </label>
                <br/>
                <label id="signup-password"> Create a password.
                    <br/>
                    <input 
                        type="text" value={password} placeholder="Create a password."
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </label>

                <br/>

                <select onChange={(e) => setMonth(e.target.value)}>Month
                    <br/>
                    <option value="">Select a Month</option>
                    {MONTHS.map((month,i) => (
                        <option key = {month} value={i}>
                            {month}
                        </option>
                    ))}
                </select>
                <br/>

                <label id="signup-day"> Day
                    <input 
                        type="text" value={day} placeholder="DD"
                        onChange={(e) => setDay(e.target.value)}>
                    </input>
                </label>

                <label id="signup-year"> Year
                    <input 
                        type="text" value={year} placeholder="YYYY"
                        onChange={(e) => setYear(e.target.value)}>
                    </input>
                </label>
    
                <button type="submit">Sign Up</button>
            </form>
            </div>
        )


}