import { supabase } from '@/lib/client'
import './Auth.css'
import { Link } from 'react-router-dom'
import { BackIcons, GitHubIcons } from '../Icons'

function Auth() {
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
  }

  return (
    <>
      <Link to='/' className='back'>
        <BackIcons />
        Atrás
      </Link>
      <section className='auth-page'>
        <div className='sing-in'>
          <div className='sing-in-card'>
            <div className='sing-in-card-content'>
              <GitHubIcons />
              <h1>Login with Github</h1>
              <button onClick={handleSignIn}>Sign In</button>
            </div>
          </div>
        </div>
        <div className='image-section'>
          <h1>Hola !!!</h1>
          <img src='../../../public/Computer.svg' alt='' />
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            doloribus rem provident voluptas similique dolores beatae odio
            laboriosam ex non perspiciatis nobis iste exercitationem, quas eum
            sequi, aliquam eaque? Enim.
          </h3>
        </div>
      </section>
    </>
  )
}

export default Auth
