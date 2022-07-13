import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { pablicRoutes, privatRoutes,navBar } from '../routs'
import { useSelector } from 'react-redux/es/exports'


const AppRoures = () => {

  const isAuth = useSelector(state => state.user.isAuth)


  return (

      <Routes>
        {isAuth && privatRoutes.map(({ path, element }) =>
          <Route key={path} path={path} element={element}></Route>
        )}

        {pablicRoutes.map(({ path, element }) =>
          <Route key={path} path={path} element={element}></Route>
        )}
        {navBar.map(({path, element,name}) => 
            <Route key={path} path={path} element={element}></Route>
            )}
      </Routes>

  )
}

export default AppRoures
