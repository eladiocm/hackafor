import { Header } from './components/Header/Header'
import { Projects } from './components/Projects/Projects'
import './App.css'
import { useGetUser } from './hooks/useGetUser'

function App() {
  const { user } = useGetUser()
  return (
    <>
      <Header user={user} />
      <main>
        <Projects />
      </main>
    </>
  )
}

export default App
