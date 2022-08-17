const intialState = {
    atvs: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 1 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 2 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 3 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 4 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 5 },
    ],
    boats: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 1 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 2 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 3 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 4 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 5 },
    ],
    jetskis: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 1 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 2 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 3 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 4 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 5 },
    ],
    boat: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 1 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 2 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 3 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 4 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 5 },
    ],
    allterra: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 1 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 2 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 3 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 4 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 5 },
    ],
    snow: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 1 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 2 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 3 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 4 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 5 },
    ],

}

const ADD_TO_SLIDER_ATVS = 'ADD_TO_SLIDER_ATVS'
const REMOVE_TO_SLIDER_ATVS = 'REMOVE_TO_SLIDER_ATVS'
const ADD_TO_SLIDER_BOATS = 'ADD_TO_SLIDER_BOATS'
const REMOVE_TO_SLIDER_BOATS = 'REMOVE_TO_SLIDER_BOATS'
const ADD_TO_SLIDER_JETSKIS = 'ADD_TO_SLIDER_JETSKIS'
const REMOVE_TO_SLIDER_JETSKIS = 'REMOVE_TO_SLIDER_JETSKIS'
const ADD_TO_SLIDER_BOAT = 'ADD_TO_SLIDER_BOAT'
const REMOVE_TO_SLIDER_BOAT = 'REMOVE_TO_SLIDER_BOAT'
const ADD_TO_SLIDER_ALLTERRA = 'ADD_TO_SLIDER_ALLTERRA'
const REMOVE_TO_SLIDER_ALLTERRA = 'REMOVE_TO_SLIDER_ALLTERRA'
const ADD_TO_SLIDER_SNOW = 'ADD_TO_SLIDER_SNOW'
const REMOVE_TO_SLIDER_SNOW = 'REMOVE_TO_SLIDER_SNOW'



export const sliderReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TO_SLIDER_ATVS:
            return { ...state, atvs: [...state.atvs, action.payload] }
        case REMOVE_TO_SLIDER_ATVS:
            return { ...state, atvs: state.atvs.filter(bask => bask.id !== action.payload) }
        case ADD_TO_SLIDER_BOATS:
            return { ...state, boats: [...state.boats, action.payload] }
        case REMOVE_TO_SLIDER_BOATS:
            return { ...state, boats: state.boats.filter(bask => bask.id !== action.payload) }
        case ADD_TO_SLIDER_JETSKIS:
            return { ...state, jetskis: [...state.jetskis, action.payload] }
        case REMOVE_TO_SLIDER_JETSKIS:
            return { ...state, jetskis: state.jetskis.filter(bask => bask.id !== action.payload) }
        case ADD_TO_SLIDER_BOAT:
            return { ...state, boat: [...state.boat, action.payload] }
        case REMOVE_TO_SLIDER_BOAT:
            return { ...state, boat: state.boat.filter(bask => bask.id !== action.payload) }
        case ADD_TO_SLIDER_ALLTERRA:
            return { ...state, allterra: [...state.allterra, action.payload] }
        case REMOVE_TO_SLIDER_ALLTERRA:
            return { ...state, allterra: state.allterra.filter(bask => bask.id !== action.payload) }
        case ADD_TO_SLIDER_SNOW:
            return { ...state, snow: [...state.snow, action.payload] }
        case REMOVE_TO_SLIDER_SNOW:
            return { ...state, snow: state.snow.filter(bask => bask.id !== action.payload) }
        default:
            return state
    }
}

export const addSliderAtvsAction = (payload) => ({ type: ADD_TO_SLIDER_ATVS, payload })
export const removeSliderAtvsAction = (payload) => ({ type: REMOVE_TO_SLIDER_ATVS, payload })
export const addSliderBoatsAction = (payload) => ({ type: ADD_TO_SLIDER_BOATS, payload })
export const removeSliderBoatsAction = (payload) => ({ type: REMOVE_TO_SLIDER_BOATS, payload })
export const addSliderJetskisAction = (payload) => ({ type: ADD_TO_SLIDER_JETSKIS, payload })
export const removeSliderJetskisAction = (payload) => ({ type: REMOVE_TO_SLIDER_JETSKIS, payload })
export const addSliderBoatAction = (payload) => ({ type: ADD_TO_SLIDER_BOAT, payload })
export const removeSliderBoatAction = (payload) => ({ type: REMOVE_TO_SLIDER_BOAT, payload })
export const addSliderAlterraAction = (payload) => ({ type: ADD_TO_SLIDER_ALLTERRA, payload })
export const removeSliderAlterraAction = (payload) => ({ type: REMOVE_TO_SLIDER_ALLTERRA, payload })
export const addSliderSnowAction = (payload) => ({ type: ADD_TO_SLIDER_SNOW, payload })
export const removeSliderSnowAction = (payload) => ({ type: REMOVE_TO_SLIDER_SNOW, payload })
