import React, { useState } from 'react'
import Logo from '../../Images/logo.jpg'
// import './Header.scss'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../hooks/useOnlineStatus'

const Header = () => {
  const [login, setLogin] = useState('Login')
  const onlineStatus = useOnlineStatus()

  const handleLogin = () => {
    setLogin(() => login !== 'Login'?'Login':'Logout')
  }
  
  return (
    <div className="flex justify-between bg-lime-100 shadow-lg m-2">
        <div>
            <img className="w-26 h-24" src={Logo} alt='logo'/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status {onlineStatus? "✅": "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/grocery">Lazing Loading Grocery</Link></li>
                <li className="px-4">Cart</li>
                <button className='login' onClick={handleLogin}>{login}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header
