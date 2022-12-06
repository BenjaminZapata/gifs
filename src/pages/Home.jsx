import { Link } from 'wouter'
import SearchBar from '../components/searchBar/SearchBar'

export default function Home () {
  return(
    <section className="home">
      <Link to='/'>
        <h1>MyGifs</h1>
      </Link>
      <SearchBar/>
    </section>
  )
}