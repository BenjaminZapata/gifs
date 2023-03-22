import { useContext } from "react";
import GifsContext from "../../contexts/GifsContext";
import WordTag from "./WordTag";

export default function RecentlySearched () {
  const { recentlySearched, eraseRecentlySearched } = useContext(GifsContext)
  
  if (recentlySearched.length !== 0){
    return (
      <section className='tagsContainer'>
        <header>
          <h3>Tus ultimas busquedas</h3>
          <small onClick={() => eraseRecentlySearched()}>Eliminar historial</small>
          </header>
        <ul className='tags'>
          {recentlySearched.map( word => {
          return <WordTag word={word} key={word}></WordTag>
          })}
        </ul>
      </section>
    )
  }
}