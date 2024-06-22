const initialState = {
    favorit: []
}

const ADD_TO_FAVORIT = 'ADD_TO_FAVORIT'
const ADD_TO_FAVORITS = 'ADD_TO_FAVORITS'
const REMOVE_TO_FAVORIT = 'REMOVE_TO_FAVORIT' 


export const favoritStore = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORIT:
            return {...state, favorit: [...state.favorit, ...action.payload]}
        case ADD_TO_FAVORITS:
            return {...state, favorit: [...state.favorit, action.payload]}
        case REMOVE_TO_FAVORIT:
            return { ...state, favorit: state.favorit.filter(favorits => favorits.id !== action.payload) }
        default:
            return state    
    }
}


export const addFavoritAction = (payload) => ({type: ADD_TO_FAVORIT ,  payload})
export const addFavoritsAction = (payload) => ({type: ADD_TO_FAVORITS ,  payload})
export const removeFavoritAction = (payload) => ({type: REMOVE_TO_FAVORIT , payload})