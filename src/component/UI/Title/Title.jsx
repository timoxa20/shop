import React from 'react'
import style from './Title.module.css'

const Title = ({title}) => {
  return (
    <div className={style.Title}>
      {title}
    </div>
  )
}

export default Title
