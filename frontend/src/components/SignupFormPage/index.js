import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionFunctions from '../../store/session'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"



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
    const [day, setDay] = useState("")
    const [month, setMonth] = useState(false)
    const [year, setYear] = useState('')
    const [errors, setErrors] = useState([])

    //redirects to homepage if signin is called while logged in
    if (sessionStorage.currentUser) history.push("/")

    useEffect(() => {
        setUsername(username)
    },[username])

   



    function handleSubmit(e){
        e.preventDefault()
        // debugger
        // const birthday = new Date()
        // birthday.setFullYear(year, month, day)
        const birthday = `${year}-${month}-${day}`
        dispatch(sessionFunctions.signup({username, password, email, birthday}))
        .then(res => {
            if (res.ok) {
                history.push('/');
            }
        })
        .catch(async (res) => {
            let data
            try {
              data = await res.clone().json();
            } catch {
              data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            // else history.push("/");
        })
        // console.log(errors)
    }

    function eleError(element){
        const eleError = []
        const holdEle = document.getElementById(`signup-${element.toLowerCase()}`)
        if(errors[0]){
            // debugger
            errors[0].forEach((error) => {
                if(error.toUpperCase().includes(element.toUpperCase())){
                    eleError.push(error)
                    //add className="red-border" to element #signup-form
                    if(holdEle) holdEle.classList.add("red-border")
                }
            });
        }
        // debugger
        if(eleError.length){
            return <div className="red-error-message">{eleError[0]}</div>
        } else {
            if(holdEle) holdEle.classList.remove("red-border")
            return []
        }
    }

    function dateError(){
        const eleError = []

        if(errors[0]){
            if(errors[0].includes("Select a month") || errors[0].includes("Not a valid date")){
                document.getElementById("signup-month").classList.add("red-border")
                eleError.push("Select a month")
            } else {
                document.getElementById("signup-month").classList.remove("red-border")
            }
            if(errors[0].includes("Select a valid day for this month") || errors[0].includes("Not a valid date")){
                document.getElementById("signup-day")
                .classList.add("red-border")
                eleError.push("Select a valid day for this month")
            } else {
                document.getElementById("signup-day")
                .classList.remove("red-border")
            }
            if(errors[0].includes("Birthday must be between 1910 and 2023") || errors[0].includes("Not a valid date")){
                document.getElementById("signup-year").classList.add("red-border")
                eleError.push("Birthday must be between 1910 and 2023")
            } else {
                document.getElementById("signup-year").classList.remove("red-border")
            }
            return(
                <ul className="signin-date-errors">
                    {eleError.map((error) => <div className="red-error-message">{error}</div>)}
                </ul>
            )
        }
        // debugger
        if(eleError.length){
            return <div className="red-error-message">{eleError[0]}</div>
        } else {
            // if(holdEle) holdEle.classList.remove("red-border")
            return []
        }
    }

    function validate_day(day){
            // const day = e.target.value;
            console.log(month + 1)
            if (day < 0 || day > 31 || 
                (["10","8","3","5"].includes(month) && day > 30) ||
                (month === "1" && (day > 28 || (year && year % 4===0 && day >29)))){ 
                    setErrors(errors => {
                        if(errors[0] && !errors[0].includes('Day cannot be larger than 31')){
                            const newErrors = [...errors];
                            // debugger;
                            if (!newErrors[0]) newErrors.push([]);
                            newErrors[0].push('Day cannot be larger than 31');
    
                            return newErrors;
                        } else {
                            return errors;
                        }
                    })
            } else {
            setDay(day)
                if(errors[0] && errors[0].includes('Day cannot be larger than 31')){
                    let i = errors[0].indexOf('Day cannot be larger than 31')
                    errors[0].splice(i,1)
                }
            }
    }



        return(
            <div className="signup-form-holder">
                <div className="white-logo">
                    <a href="/">Spotify</a>
                </div>
                <h2>Sign up for free to start listening.</h2>
                <div className="light-grey-line"></div>
                <form onSubmit={handleSubmit} className="signup-form">
                {/* {errors.map((error) => <div><p>{error}</p></div>)} */}
                    <label id="signup-email" className="signup-text-letters"> What's your email address?
                        <br/>
                        <input 
                            type="text" value={email} placeholder= 'Enter your email.' 
                            onChange={(e) => setEmail(e.target.value)} required>
                        </input>
                    </label>
                    {eleError("email")}
                    <br/>
                    <label id="signup-password" className="signup-text-letters"> Create a password
                        <br/>
                        <input 
                            type="text" value={password} placeholder="Create a password."
                            onChange={(e) => setPassword(e.target.value)} required>
                        </input>
                    </label>
                    {eleError("password")}
                    <br/>
                    <label id="signup-username" className="signup-text-letters"> What should we call you?
                        <br/>
                        <input 
                            type="text" value={username} placeholder= 'Enter a profile name.'
                            onChange={(e) => setUsername(e.target.value)}  required>
                        </input>
                    </label>
                    {eleError("username")}
                    <br/>
                    <p className="whats-your-birthday-p">What's your date of birth?</p>
                    <label className="birthday-div">
                    <br/>
                        <label className= "month-label">Month
                            <select 
                                id="signup-month" className="signup-month" 
                                onChange={(e) => setMonth(e.target.value)}
                            >
                                <option value={false}>Month</option>
                                {MONTHS.map((month,i) => (
                                    <option key = {month} value={i}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <br/>

                        <label id="signup-day"> Day
                            <br/>
                            <input 
                                type="text" value={day} placeholder="DD"
                                onChange={(e) => validate_day(e.target.value)} required>
                            </input>
                        </label>

                        <label id="signup-year"> Year
                            <br/>
                            <input 
                                type="text" value={year} placeholder="YYYY"
                                onChange={(e) => setYear(e.target.value)} required>
                            </input>
                        </label>
                        {/* {errors.map((error) => <p>{error}</p>)} */}
                    </label>
                    {dateError()}
                   
        
                    <button type="submit">Sign Up</button>
                </form>
                <p className="blackText">{"Have an account?  "}  
                    <Link to="/login">Log in.</Link>
                </p>
            </div>
        )


}