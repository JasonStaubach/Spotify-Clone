import csrfFetch from "./csrf.js";
import { storeCSRFToken } from "./csrf.js";

const SET_CURRENT_USER = 'session/SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'session/REMOVE_CURRENT_USER';

function setCurrentUser(user){
  return {
    'type': 'SET_CURRENT_USER',
    'payload': user
  }
}

function removeCurrentUser(){
    return{
        type: REMOVE_CURRENT_USER
    }
}

export function login ({cred, password}){
    return async function(dispatch){
        const res = await csrfFetch("api/session", {
            method: 'POST',
            body: JSON.stringify({cred, password})
        })

        const data = await res.json()

        //save data as current user

        return res
    }
}