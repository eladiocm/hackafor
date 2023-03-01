import { Search } from 'iconoir-react'
import { useNavigate } from 'react-router-dom'
import styles from './searchbar.module.css'

/**
 * TODO:  user:techwithmat tech:react project:fira
 * - FILTER BY USERNAME
 * - FILTER BY PROJECT NAME
 * - FILTER BY TECHNOLOGY
 */

function SearchBar() {
  const navigator = useNavigate()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const query = new FormData(e.target).get('query')

    navigator('/search/' + query)
  }

  return (
    <form className={styles.searchBar} onSubmit={handleOnSubmit}>
      <input type='text' placeholder='Buscar proyectos...' name='query' />
      <button type='submit'>
        <Search />
      </button>
    </form>
  )
}

export default SearchBar
