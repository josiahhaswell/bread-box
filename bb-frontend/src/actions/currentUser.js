import { resetLoginForm } from './loginForm'
import { getUserRecipes } from './userRecipes'

//sync
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}
//async
export const login = credentials => {

    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
            alert(res.error)
        } else { 
            dispatch(setCurrentUser(res.data))
            dispatch(getUserRecipes())
            dispatch(resetLoginForm())
        } 
    })
    .catch(console.log)
    }
}

export const logout = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/logout', {
        credentials: "include",
        method: "DELETE"
    })
}
}

export const getCurrentUser = () => {

    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
            alert(res.error)
        } else { 
            dispatch(setCurrentUser(res.data))
            dispatch(getUserRecipes())
        } 
    })
    .catch(console.log)
    }
}