import { useEffect, useContext } from "react"
import GifsContext from "../../contexts/GifsContext"
import GetGifs from "../../services/GetGifs"
import { Gif } from "./Gif"

export function ListOfGifs ({ keyword }) {
  const { gifs, setGifs } = useContext(GifsContext)
  useEffect(() => {
    GetGifs(keyword)
    .then(gifs =>{
      setGifs(gifs)
      localStorage.setItem("keyword", keyword.keyword);
      })
  }, [keyword])
  
  return(
    <ul className="gifList">
      {gifs?.map(gif =>{
        return <Gif params={gif} key={gif.id}/>
      })}
    </ul>
  )
}