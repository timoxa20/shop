import axios from 'axios'
import { addFavoritAction } from '../store/FavoriteStore'


export const fetchFavorit = () => {
    return dispatch => {
        const ur = 'http://localhost:3000/favorit'
        axios.get(ur)
        .then((res) => {
            const response = res.data
        dispatch(addFavoritAction(response))})
    }}