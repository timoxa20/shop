import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateShema";

export const store = configureStore<StateSchema>({
    reducer:{},
})
export function createReduxStore  (
    initialState: StateSchema | undefined,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>,
) {

}
