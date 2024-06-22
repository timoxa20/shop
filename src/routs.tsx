import { ADMIN_ROUTE, ALLTERRAINVEHICLES_ROUTE, ATVS_ROUTE, BASKET_ROUTE, BOATS_ROUTE, BOAT_ROUTE, DELIVERY_ROUTE, DEVICE_ROUTE, ENGINES_ROUTE, FAVORITES_ROUTE, JETSCIS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHARES_ROUTE, SHOP_ROUTE, SNOWMOBILES_ROUTE, SPARE_ROUTE } from "./const"
import Admin from "./Pages/Admin"
import ATVSPages from "./Pages/ATVSPages"
import Auth from "./Pages/Auth"
import BasketPages from "./Pages/BasketPages"
import BoatsPages from "./Pages/BoatsPages"
import DeliveryOages from "./Pages/DeliveryOages"
import DevicePages from "./Pages/DevicePages/DevicePages"
import FavoritesPages from "./Pages/FavoritesPages"
import SharesPages from "./Pages/SharesPages"
import JetscisPages from './Pages/JetscisPages'
import BoatPages from './Pages/BoatPages'
import AlterraPages from './Pages/AlterraPages'
import SnowPages from './Pages/SnowPages'
import EnginesPages from './Pages/EnginesPages'
import SharePages from './Pages/SharePages'
import ShopPages from "./Pages/ShopPages"
import X1 from './assets/iconsRoute/X1.png'
import X2 from './assets/iconsRoute/X2.png'
import X3 from './assets/iconsRoute/X3.png'
import X4 from './assets/iconsRoute/X4.png'
import X5 from './assets/iconsRoute/X5.png'
import X6 from './assets/iconsRoute/X6.png'

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
        element: <BoatsPages/>,
        name: 'Катера',
    },
    {
        path: JETSCIS_ROUTE,
        element: <JetscisPages/>,
        name: 'Гидроциклы',
    },
    {
        path: BOAT_ROUTE,
        element: <BoatPages/>,
        name: 'Лодки',
    },
    {
        path: ALLTERRAINVEHICLES_ROUTE,
        element: <AlterraPages/>,
        name: 'Вездеходы',
    },
    {
        path: SNOWMOBILES_ROUTE,
        element: <SnowPages/>,
        name: 'Снегоходы'
    },
    {
        path: ENGINES_ROUTE,
        element: <EnginesPages/>,
        name: 'Двигатели'
    },
    {
        path: SPARE_ROUTE,
        element: <SharePages/>,
        name: 'Запчасти'
    },
]

export const navRouts =[
    {
        path: ATVS_ROUTE,
        element: <ATVSPages/>,
        name: 'Квадроциклы',
        img: X1
    },
    {
        path: JETSCIS_ROUTE,
        element: <Admin/>,
        name: 'Гидроциклы',
        img: X2
    },
    {
        path: BOATS_ROUTE,
        element: <BoatsPages/>,
        name: 'Катера',
        img: X3
    },
    {
        path: SNOWMOBILES_ROUTE,
        element: <Admin/>,
        name: 'Снегоходы',
        img: X4
    },
    {
        path: SPARE_ROUTE,
        element: <Admin/>,
        name: 'Вездеходы',
        img: X6
    },
    {
        path: ENGINES_ROUTE,
        element: <Admin/>,
        name: 'Двигатели',
        img: X5
    },
  ]

  export const footerRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>,
        name: 'О компаний',
    },
    {
        path: ADMIN_ROUTE,
        element: <Admin/>,
        name: 'Контакты',
    },
    {
        path: ADMIN_ROUTE,
        element: <Admin/>,
        name: 'Акций',
    },
    {
        path: ADMIN_ROUTE,
        element: <Admin/>,
        name: 'Магазины',
    }
]