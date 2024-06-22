const intialState = {
    basket: []
}

const ADD_TO_CARD = 'ADD_TO_CARD'
const ADD_TO_CARDS = 'ADD_TO_CARDS'
const REMOVE_TO_CARD = 'REMOVE_TO_CARD'

export const basketReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TO_CARDS:
            return {...state, basket: [...state.basket, ...action.payload]}
        case ADD_TO_CARD:
            return { ...state, basket: [...state.basket, action.payload] }
        case REMOVE_TO_CARD:
            return { ...state, basket: state.basket.filter(bask => bask.id !== action.payload) }
        default:
            return state
    }
}

export const addBasketAction = (payload) => ({ type: ADD_TO_CARD, payload })
export const addBasketsAction = (payload) => ({ type: ADD_TO_CARDS, payload })
export const removeBasketAction = (payload) => ({ type: REMOVE_TO_CARD, payload })
