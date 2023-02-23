import { supabase } from '@/lib/client'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function useUserSession() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const getSession = async () => {
      setLoading(true)

      try {
        const { data } = await supabase.auth.getSession()
        setUser(data.session.user)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    getSession()
  }, [navigate])

  return { user, loading }
}

export default useUserSession
