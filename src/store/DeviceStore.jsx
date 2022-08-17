import { ALLTERRAINVEHICLES_ROUTE, ATVS_ROUTE, BOATS_ROUTE, BOAT_ROUTE, ENGINES_ROUTE, JETSCIS_ROUTE, SNOWMOBILES_ROUTE, SPARE_ROUTE } from "../const"


const initialState = {
   _types: [
    {id:1, to: ATVS_ROUTE, name: 'Квадроциклы'},
    {id:2, to: BOATS_ROUTE,  name: 'Катера'},
    {id:3, to: JETSCIS_ROUTE , name: 'Гидроциклы'},
    {id:4, to: BOAT_ROUTE, name: 'Лодки'},
    {id:5, to: ALLTERRAINVEHICLES_ROUTE, name: 'Вездеходы'},
    {id:6, to: SNOWMOBILES_ROUTE , name: 'Снегоходы'},
    {id:7, to: ENGINES_ROUTE, name: 'Двигатели'},
    {id:8, to: SPARE_ROUTE , name: 'Запчасти'},
   ],
   _brands: [
    {id:1, name: 'Квадроциклы'},
    {id:2, name: 'Катера'},
    {id:3, name: 'Гидроциклы'},
    {id:4, name: 'Лодки'},
    {id:5, name: 'Вездеходы'},
    {id:6, name: 'Снегоходы'},
    {id:7, name: 'Двигатели'},
    {id:8, name: 'Запчасти'},
   ],
   _device: [
    {id:1, name: 'Квадроциклы'},
    {id:2, name: 'Катера'},
    {id:3, name: 'Гидроциклы'},
    {id:4, name: 'Лодки'},
    {id:5, name: 'Вездеходы'},
    {id:6, name: 'Снегоходы'},
    {id:7, name: 'Двигатели'},
    {id:8, name: 'Запчасти'},
   ]
}


export const deviceReducer = (state = initialState._types, action) => {
    switch (action.type) {
        default:
            return state
    }
}

