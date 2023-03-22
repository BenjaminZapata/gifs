import SearchBar from '../components/searchBar/SearchBar'
import RecentlySearched from '../components/wordTags/RecentlySearched';
import TagsContainer from '../components/wordTags/TagsContainer'

export default function Home () {
  const random = require('random-words');
  const randomWords = random(20) || []

  return(
    <section className="home">
        <h1 className='mainTitle'>MyGifs</h1>
      <SearchBar/>
      <RecentlySearched/>
      <TagsContainer words={randomWords}/>
    </section>
  )
}