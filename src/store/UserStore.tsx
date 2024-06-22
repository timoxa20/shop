

const initialState = {
    isAuth: false
}

export const SET_CHECKBOX_VALUE = 'SET_CHECKBOX_VALUE'
export const GET_CHECKBOX_VALUE = 'GET_CHECKBOX_VALUE'




export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CHECKBOX_VALUE:
            return {...state, isAuth: action.payload }
        case GET_CHECKBOX_VALUE:
            return {...state, isAuth: false }
        default:
            return state;
    }
}

export const setChetboxAction = (payload) => ({type: SET_CHECKBOX_VALUE, payload })
export const getChetboxAction = (payload) => ({type: GET_CHECKBOX_VALUE, payload })

