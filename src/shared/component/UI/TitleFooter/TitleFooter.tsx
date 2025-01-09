import React from 'react'
import style from './TitleFooter.module.scss'

const TitleFooter = ({title}) => {
  return (
    <div className={style.TitleFooter}>
      {title}
    </div>
  )
}

export default TitleFooter
