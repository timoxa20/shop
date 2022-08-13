import React from 'react'
import { useState } from 'react'
import style from './FormFooter.module.css'

const FormFooter = () => {
    const [value, setValue] = useState('')


  return (
    <form className={style.TitleFooter}>
      <input 
      placeholder='Введите ваш e-mail:'
      className={style.TitleFooterInput}
      type='email' 
      value={value}
      onChange={event => setValue(event.target.value)}
      />
      <button className={style.TitleFooterButton} >Отправить</button>
    </form>
  )
}

export default FormFooter
