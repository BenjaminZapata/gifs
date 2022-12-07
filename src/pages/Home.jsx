import { Link } from 'wouter'
import SearchBar from '../components/searchBar/SearchBar'
import { ListOfGifs } from '../components/listOfGifs/ListOfGifs'

export default function Home () {
  return(
    <section className="home">
      <Link to='/'>
        <h1 className='mainTitle'>MyGifs</h1>
      </Link>
      <SearchBar/>
      <ListOfGifs keyword='argentina'/>
    </section>
  )
}