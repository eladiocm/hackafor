import { Link, useNavigate } from 'react-router-dom'
import styles from './header.module.css'
import useUserSession from '@/hooks/useUserSession'
import { useState, useRef } from 'react'
import { Plus, GridAdd, LogOut } from 'iconoir-react'
import { supabase } from '@/lib/client'
import useOnClickOutside from '@/hooks/useOnClickOutside'

function Auth() {
  const [isOpen, setIsOpen] = useState(false)
  const { loading, user } = useUserSession()
  const navigate = useNavigate()
  const ref = useRef()
  useOnClickOutside(ref, () => setIsOpen(false))

  if (loading) {
    return <button className={styles.btn}>Cargando...</button>
  }

  if (!user) {
    return (
      <Link to='/auth' className={styles.btn}>
        Iniciar sesión
      </Link>
    )
  }

  const handleLogOut = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <div className={styles.menu} ref={ref}>
      <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
        <img
          src={user?.user_metadata.avatar_url}
          alt={user?.user_metadata.user_name + ' ' + 'Avatar'}
          className={styles.avatar}
        />
        {user?.user_metadata.user_name}
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <Link to='/create' className={styles.dropdown__item}>
            <Plus /> Añadir Proyecto
          </Link>
          <Link to='/dashboard' className={styles.dropdown__item}>
            <GridAdd /> Dashboard
          </Link>
          <button className={styles.dropdown__item} onClick={handleLogOut}>
            <LogOut /> Cerrar sesión
          </button>
        </div>
      )}
    </div>
  )
}

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link to='/' className={styles.logo}>
          Logo
        </Link>

        <Auth />
      </div>
    </header>
  )
}

export default Header
