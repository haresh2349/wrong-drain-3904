import { ADD_PROJECT_FAILURE, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, GET_PROJECT_FAILURE, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS } from "./actionTypes"

const initialState = {
    tasks:[],
    isLoading:false,
    isError:false
}

export const appReducer= (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_PROJECT_REQUEST:{
        return{
            ...state,
            isLoading:true,
            isError:false

        }
    }

   case GET_PROJECT_SUCCESS:{
    return{
        ...state,
        tasks:payload,
        isLoading:false,
        isError:false
    }
   }
    
   case GET_PROJECT_FAILURE:{
    return{
        ...state,
        isLoading:false,
        isError:true

    }
}

   case ADD_PROJECT_REQUEST:{
    return{
        isLoading:true,
        isError:false
    }
   }

   case ADD_PROJECT_SUCCESS:{
    return{
        ...state,
        tasks:[...state.tasks,payload],
        isLoading:false,
        isError:false
    }
   }

   case ADD_PROJECT_FAILURE:{
    return {
        ...state,
        isLoading:false,
        isError:true
    }
   }

   

   
  default:
    return state
  }
}
