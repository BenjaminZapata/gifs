import { useContext } from 'react';
import GifsContext from '../contexts/GifsContext';
import { Link } from 'wouter'
import { ListOfGifs } from "../components/listOfGifs/ListOfGifs";
import SearchBar from "../components/searchBar/SearchBar";

export function SearchResults ( value ) {
  const { addToRecentlySearched } = useContext(GifsContext)
  const { params } = value
  addToRecentlySearched(params.keyword)
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