import { NavArrowDown } from 'iconoir-react'
import { Link } from 'react-router-dom'
import './DropDown.css'

export const DropDown = ({ children, handleLogOut }) => {
  return (
    <button className='dropdown'>
      <div className='drop-info-user'>
        {children}
        <NavArrowDown />
      </div>
      <div className='menu'>
        <Link to='#'>Mis Proyectos</Link>
        <Link to='#'>Favoritos</Link>
        <Link to='#'>
          <button onClick={handleLogOut}>Log Out</button>
        </Link>
      </div>
    </button>
  )
}
