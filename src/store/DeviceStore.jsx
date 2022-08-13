

const initialState = {
   _types: [
    {id:1, name: 'Квадроциклы'},
    {id:2, name: 'Катера'},
    {id:3, name: 'Гидроциклы'},
    {id:4, name: 'Лодки'},
    {id:5, name: 'Вездеходы'},
    {id:6, name: 'Снегоходы'},
    {id:7, name: 'Двигатели'},
    {id:8, name: 'Запчасти'},
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

