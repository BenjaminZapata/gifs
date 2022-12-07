import { Link } from 'wouter'
import { ListOfGifs } from "../components/listOfGifs/ListOfGifs";
import SearchBar from "../components/searchBar/SearchBar";

export function SearchResults ( value ) {
  const { params } = value
  return(
    <section className="results">
      <Link to='/'>
        <h1 className='mainTitle'>MyGifs</h1>
      </Link>
      <SearchBar/>
      <ListOfGifs keyword={ params }/>
    </section>
  )
}