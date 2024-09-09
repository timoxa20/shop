import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateShema";

export const store = configureStore({
    reducer:{},
})
export function createReduxStore  (
    initialState: StateSchema | undefined,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>,
) {

}
