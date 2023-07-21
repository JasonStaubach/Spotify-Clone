export async function csrfFetch(url, options = {}){
    options.method ||= "GET"
    options.headers ||= {}
    
    if (options.method.toUpperCase() !== "GET" || !options.headers["Content-Type"]) {
        options.headers["Content-Type"] ||= "application/json";
        options.headers["X-CSRF-Token"] = sessionStorage.getItem("X-CSRF-Token");
    }
    
    
    const res = await fetch(url, options);
    //this code checks if response has error, if it doesnt then return res
    if (res.status >= 400) throw res;
    return res;
}

//this function steals all the headers from a fetch request
export async function restoreCSRF(){
    const res = await csrfFetch("/api/session")
    storeCSRFToken(res)
    debugger
    return res
}

//this function takes the CSRFtoken from the headers and saves in in the session
export function storeCSRFToken(res){
    const token = res.headers.get("X-CSRF-Token")
    if(token){
        sessionStorage.setItem("X-CSRF-Token", token)
    }
}