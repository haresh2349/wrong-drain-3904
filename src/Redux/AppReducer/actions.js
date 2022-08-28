




import axios from "axios"
import { ADD_PROJECT_FAILURE, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, GET_PROJECT_FAILURE, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, PATCH_PROJECT_FAILURE, PATCH_PROJECT_REQUEST, PATCH_PROJECT_SUCCESS } from "./actionTypes"



   export const getProject=()=>(dispatch)=>{

        dispatch({type:GET_PROJECT_REQUEST})
    
        return axios.get("https://toggl-track.herokuapp.com/tasks")
        .then((r)=>{
            dispatch({type:GET_PROJECT_SUCCESS,payload:r.data})
        })
        .catch((e)=>{
            dispatch({type :GET_PROJECT_FAILURE})
        })
    }

    export const addProject=(payload)=>(dispatch)=>{

        dispatch({type:ADD_PROJECT_REQUEST})
    
        return axios.post("https://toggl-track.herokuapp.com/tasks",payload)
        .then((r)=>{
            dispatch({type:ADD_PROJECT_SUCCESS,payload})
        })
        .catch((e)=>{
            dispatch({type :ADD_PROJECT_FAILURE})
        })
    
    }

    
    export const editProject=(id,payload)=>(dispatch)=>{
        console.log(id,payload)
        dispatch({type:PATCH_PROJECT_REQUEST})
    
        return axios.patch(`https://toggl-track.herokuapp.com/tasks/${id}`,payload)
        .then((r)=>{
            // dispatch({type:PATCH_PROJECT_SUCCESS})
            dispatch(getProject())
        })
        .catch((e)=>{
            dispatch({type :PATCH_PROJECT_FAILURE})
        })
    
    }

    export const deleteProject=(id)=>(dispatch)=>{

        dispatch({type:DELETE_PROJECT_REQUEST})
    
        return axios.delete(`https://toggl-track.herokuapp.com/tasks/${id}`)
        .then((r)=>{
            dispatch({type:DELETE_PROJECT_SUCCESS})
        
        })
        .catch((e)=>{
            dispatch({type :DELETE_PROJECT_FAILURE})
        })
    
    }