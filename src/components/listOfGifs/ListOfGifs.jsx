import { useEffect, useContext } from "react"
import GifsContext from "../../contexts/GifsContext"
import getGifs from "../../services/GetGifs"
import { Gif } from "./Gif"

export function ListOfGifs ({ keyword }) {
  const { gifs, setGifs } = useContext(GifsContext)
  useEffect(() => {
    getGifs(keyword)
    .then(gifs =>{
      setGifs(gifs)
      })
    
  }, [keyword])
  
  return(
    <ul className="gifList">
      {gifs?.map(gif =>{
        return <Gif params={ gif } key={gif.id}/>
      })}
    </ul>
  )
}