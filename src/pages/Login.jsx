import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import TheButton from '../components/UI/button/TheButton'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', 
    textAlign: 'center', gap: '20px'}}>
        <h1>Авторизация</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder='Введите имя' />
            <MyInput type="password" placeholder='Введите пароль' />
            <div>
              <TheButton>Войти</TheButton>
            </div>
        </form>
    </div>
  )
}

export default Login