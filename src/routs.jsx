import { ADMIN_ROUTE, ALLTERRAINVEHICLES_ROUTE, ATVS_ROUTE, BASKET_ROUTE, BOATS_ROUTE, BOAT_ROUTE, DELIVERY_ROUTE, DEVICE_ROUTE, ENGINES_ROUTE, FAVORITES_ROUTE, JETSCIS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHARES_ROUTE, SHOP_ROUTE, SNOWMOBILES_ROUTE, SPARE_ROUTE } from "./const"
import Admin from "./Pages/Admin"
import ATVSPages from "./Pages/ATVSPages"
import Auth from "./Pages/Auth"
import BasketPages from "./Pages/BasketPages"
import BoatsPagex from "./Pages/BoatsPagex"
import DeliveryOages from "./Pages/DeliveryOages"
import DevicePages from "./Pages/DevicePages"
import FavoritesPages from "./Pages/FavoritesPages"
import SharesPages from "./Pages/SharesPages"
import ShopPages from "./Pages/ShopPages"

export const privatRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    }
]

export const pablicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <ShopPages/>
    },
    {
        path: SHARES_ROUTE,
        element: <SharesPages/>
    },
    {
        path: DELIVERY_ROUTE,
        element: <DeliveryOages/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },
    {
        path: FAVORITES_ROUTE,
        element: <FavoritesPages/>
    },
    {
        path: BASKET_ROUTE,
        element: <BasketPages/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePages/>
    },

]



export const navBar =[
    {
        path: ATVS_ROUTE,
        element: <ATVSPages/>,
        name: 'Квадроциклы'
    },
    {
        path: BOATS_ROUTE,
        element: <BoatsPagex/>,
        name: 'Катера',
    },
    // {
    //     path: JETSCIS_ROUTE,
    //     element: <Admin/>,
    //     name: 'Гидроциклы',
    // },
    // {
    //     path: BOAT_ROUTE,
    //     element: <Admin/>,
    //     name: 'Лодки',
    // },
    // {
    //     path: ALLTERRAINVEHICLES_ROUTE,
    //     element: <Admin/>,
    //     name: 'Вездеходы',
    // },
    // {
    //     path: SNOWMOBILES_ROUTE,
    //     element: <Admin/>,
    //     name: 'Снегоходы'
    // },
    // {
    //     path: ENGINES_ROUTE,
    //     element: <Admin/>,
    //     name: 'Двигатели'
    // },
    // {
    //     path: SPARE_ROUTE,
    //     element: <Admin/>,
    //     name: 'Запчасти'
    // },
]

