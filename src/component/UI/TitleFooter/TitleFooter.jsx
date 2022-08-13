import React from 'react'
import style from '../TitleFooter/TitleFooter.module.css'

const TitleFooter = ({title}) => {
  return (
    <div className={style.TitleFooter}>
      {title}
    </div>
  )
}

export default TitleFooter
