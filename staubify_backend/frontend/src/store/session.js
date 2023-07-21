import { csrfFetch } from "./csrf.js";
// import { storeCSRFToken } from "./csrf.js";

const SET_CURRENT_USER = 'session/SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'session/REMOVE_CURRENT_USER';

export default function sessionReducer(state = {}, action){
    let newState = state;
    switch (action.type){
        case SET_CURRENT_USER:
            return {...newState, user: action.parameters}
        case REMOVE_CURRENT_USER:
            return {...newState, user: null}
        default:
            return newState
    }
}

function setCurrentUser(user){
  return {
    type: 'SET_CURRENT_USER',
    parameters: user
  }
}

function removeCurrentUser(){
    return{
        type: REMOVE_CURRENT_USER
    }
}

export function login ({username, password}){
    return async function(dispatch){
        // debugger
        const res = await csrfFetch("api/session", {
            method: 'POST',
            body: JSON.stringify({username, password})
        })

        const data = await res.json()

        //save data as current user
        storeCurrentUser(data.user)
        dispatch(setCurrentUser(data.user))

        return res
    }
}

export function logout(){
    return async function (dispatch){
    const res = await csrfFetch("/api/session", {
      method: "DELETE",
      headers: {"X-CSRF-Token": sessionStorage['X-CSRF-Token']}
    });
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
    return res;
  };
}

function storeCurrentUser(user){
    if(user){
        sessionStorage.setItem("currentUser", JSON.stringify(user))
    } else {
        sessionStorage.removeItem("currentUser")
    }
}