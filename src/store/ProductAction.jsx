const intialState = {
    atvs: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 1 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 2 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 3 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 4 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 5 },
    ],
    boats: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 6 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 7 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 8 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 9 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 10 },
    ],
    jetskis: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 11 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 12 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 13 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 14 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 15 },
    ],
    boat: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 16 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 17 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 18 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 19 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 20 },
    ],
    allterra: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 21 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 22 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 23 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 24 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 25 },
    ],
    snow: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 26 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 27 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 28 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 29 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 30 },
    ],
    engine: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 31 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 32 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 33 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 34 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 35 },
    ],
    spare: [
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 36 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 37 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 38 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 39 },
        { title: "Cesar salad", price: 12, url: "https://zavidovo.kz/wp-content/uploads/2016/08/salat-k-rybnomu-blyudu.jpg", category: "salads", id: 40 },
    ],

}

const ADD_TO_ATVS = 'ADD_TO_ATVS'
const REMOVE_TO_ATVS = 'REMOVE_TO_ATVS'
const ADD_TO_BOATS = 'ADD_TO_BOATS'
const REMOVE_TO_BOATS = 'REMOVE_TO_BOATS'
const ADD_TO_JETSCIS = 'ADD_TO_JETSCIS'
const REMOVE_TO_JETSCIS = 'REMOVE_TO_JETSCIS'
const ADD_TO_BOAT = 'ADD_TO_BOAT'
const REMOVE_TO_BOAT = 'REMOVE_TO_BOAT'
const ADD_TO_ALTERRA = 'ADD_TO_ALTERRA'
const REMOVE_TO_ALTERRA = 'REMOVE_TO_ALTERRA'
const ADD_TO_SNOW = 'ADD_TO_SNOW'
const REMOVE_TO_SNOW = 'REMOVE_TO_SNOW'
const ADD_TO_ENGINE = 'ADD_TO_ENGINE'
const REMOVE_TO_ENGINE = 'REMOVE_TO_ENGINE'
const ADD_TO_SPARE = 'ADD_TO_SPARE'
const REMOVE_TO_SPARE = 'REMOVE_TO_SPARE'

export const produstReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TO_ATVS:
            return { ...state, atvs: [...state.atvs, action.payload] }
        case REMOVE_TO_ATVS:
            return { ...state, atvs: state.atvs.filter(bask => bask.id !== action.payload) }
        case ADD_TO_BOATS:
            return { ...state, boats: [...state.boats, action.payload] }
        case REMOVE_TO_BOATS:
            return { ...state, boats: state.boats.filter(bask => bask.id !== action.payload) }
        case ADD_TO_JETSCIS:
            return { ...state, jetskis: [...state.jetskis, action.payload] }
        case REMOVE_TO_JETSCIS:
            return { ...state, jetskis: state.jetskis.filter(bask => bask.id !== action.payload) }
        case ADD_TO_BOAT:
            return { ...state, boat: [...state.boat, action.payload] }
        case REMOVE_TO_BOAT:
            return { ...state, boat: state.boat.filter(bask => bask.id !== action.payload) }
        case ADD_TO_ALTERRA:
            return { ...state, allterra: [...state.allterra, action.payload] }
        case REMOVE_TO_ALTERRA:
            return { ...state, allterra: state.allterra.filter(bask => bask.id !== action.payload) }
        case ADD_TO_SNOW:
            return { ...state, snow: [...state.snow, action.payload] }
        case REMOVE_TO_SNOW:
            return { ...state, snow: state.snow.filter(bask => bask.id !== action.payload) }
        case ADD_TO_ENGINE:
            return { ...state, engine: [...state.engine, action.payload] }
        case REMOVE_TO_ENGINE:
            return { ...state, engine: state.engine.filter(bask => bask.id !== action.payload) }
        case ADD_TO_SPARE:
            return { ...state, spare: [...state.spare, action.payload] }
        case REMOVE_TO_SPARE:
            return { ...state, spare: state.spare.filter(bask => bask.id !== action.payload) }
        default:
            return state
    }
}


export const addAtvsAction = (payload) => ({ type: ADD_TO_ATVS, payload })
export const removeAtvsAction = (payload) => ({ type: REMOVE_TO_ATVS, payload })
export const addBoatsAction = (payload) => ({ type: ADD_TO_BOATS, payload })
export const removeBoatsAction = (payload) => ({ type: REMOVE_TO_BOATS, payload })
export const addJetskisAction = (payload) => ({ type: ADD_TO_JETSCIS, payload })
export const removeJetskisAction = (payload) => ({ type: REMOVE_TO_JETSCIS, payload })
export const addBoatAction = (payload) => ({ type: ADD_TO_BOAT, payload })
export const removeBoatAction = (payload) => ({ type: REMOVE_TO_BOAT, payload })
export const addAlterraAction = (payload) => ({ type: ADD_TO_ALTERRA, payload })
export const removeAlterraAction = (payload) => ({ type: REMOVE_TO_ALTERRA, payload })
export const addSnowAction = (payload) => ({ type: ADD_TO_SNOW, payload })
export const removeSnowAction = (payload) => ({ type: REMOVE_TO_SNOW, payload })
export const addEngineAction = (payload) => ({ type: ADD_TO_ENGINE, payload })
export const removeEngineAction = (payload) => ({ type: REMOVE_TO_ENGINE, payload })
export const addSpareAction = (payload) => ({ type: ADD_TO_SPARE, payload })
export const removeSpareAction = (payload) => ({ type: REMOVE_TO_SPARE, payload })