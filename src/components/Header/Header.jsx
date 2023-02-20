import { supabase } from '@/lib/client'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

export const Header = ({ user }) => {
  const navigate = useNavigate()

  const handleLogOut = async () => {
    // Handle errors later. The SignOut function return a error
    await supabase.auth.signOut()
    navigate('/auth')
  }

  return (
    <header className='header'>
      <Link to='/' className='logo'>
        <h1>Home Page</h1>
      </Link>
      {user ? (
        <>
          <div className='user-logged-info'>
            <img
              src={user?.user_metadata.avatar_url}
              alt={user?.user_metadata.user_name + ' ' + 'Avatar'}
            />
            <p>{user?.user_metadata.user_name}</p>

            <button onClick={handleLogOut}>Log Out</button>
          </div>
        </>
      ) : (
        <Link to='/auth'>Sign In</Link>
      )}
    </header>
  )
}
