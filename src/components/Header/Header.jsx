import { supabase } from '@/lib/client'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { DropDown } from '../DropDown/DropDown'

export const Header = ({ user }) => {
  const navigate = useNavigate()

  const handleLogOut = async () => {
    // Handle errors later. The SignOut function return a error
    await supabase.auth.signOut()
    navigate('/auth')
  }

  return (
    <header className='header'>
      <nav className='nav'>
        <Link to='/' className='logo'>
          <h1>Home Page</h1>
        </Link>
        <div className='section-login'>
          {user ? (
            <>
              <DropDown handleLogOut={handleLogOut}>
                <div className='user-logged-info'>
                  <img
                    src={user?.user_metadata.avatar_url}
                    alt={user?.user_metadata.user_name + ' ' + 'Avatar'}
                  />
                  <p>{user?.user_metadata.user_name}</p>
                </div>
              </DropDown>
            </>
          ) : (
            <Link to='/auth' className='sign-in-button'>
              Sign In
            </Link>
          )}
          <Link to={user ? '#' : '/auth'} className='add-project-button'>
            <span>Añadir Proyecto</span> +
          </Link>
        </div>
      </nav>
      <div className='text-header'>
        <h1>
          Comparte tu web con <br /> la comunidad
        </h1>
      </div>
      <div className='search'>
        <input className='input-search' type='search' placeholder='Search...' />

        <div className='search-filter-likes'>Likes</div>
        <div className='search-filter-technology'>Tecnologías</div>
        <button className='search-button'>Search</button>
      </div>
    </header>
  )
}
