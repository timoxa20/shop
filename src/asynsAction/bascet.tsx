import axios from "axios";
import { addBasketsAction } from "../store/BasketStore";

export const fetchBaskets =  () => {
    return  dispatch => {
        const url = 'http://localhost:3000/basket'
        axios.get(url)
            .then((res) => {
                const response = res.data
                dispatch(addBasketsAction(response))
            })
    }
}