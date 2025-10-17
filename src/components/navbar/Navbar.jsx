import React from 'react'
import { Link } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import TheButton from '../UI/button/TheButton'

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = (e) => {
      e.preventDefault()
      setIsAuth(false)
      localStorage.removeItem('auth')
    }
  return (
    <header style={{display: 'flex', backgroundColor: 'lime', padding: '20px',
        justifyContent: 'center', alignItems: 'center', marginBottom: '20px', fontSize: '20px',
        fontWeight: '600', gap: '20px'
      }}>
        <Link to="/">Главная</Link>
        <Link to="/posts">Посты</Link>
        {isAuth 
            ? <a href='#' onClick={logout}>Выйти</a>
            : <Link to="/login">Войти</Link>
        }
    </header>
  )
}

export default Navbar