import { supabase } from '@/lib/client'

function Auth() {
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
  }

  return (
    <>
      <h1>Login with Github</h1>
      <button onClick={handleSignIn}>Sign In</button>
    </>
  )
}

export default Auth
