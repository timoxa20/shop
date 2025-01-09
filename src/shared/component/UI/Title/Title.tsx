import React from 'react'
import style from './Title.module.scss'

const Title = ({title}) => {
  return (
    <div className={style.Title}>
      {title}
    </div>
  )
}

export default Title
