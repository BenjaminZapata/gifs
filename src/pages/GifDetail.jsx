import { useContext } from "react"
import { Link } from 'wouter'
import GifsContext from "../contexts/GifsContext"

export function GifDetail ({params}) {
  const { gifs } = useContext(GifsContext)
  const { id } = params

  const gif = gifs.find(gif => gif.id === id)
  const { url, title } = gif
  return(
    <>
      <article className="gifDetails">
        <Link to='/'>
          <h1 className='mainTitle'>MyGifs</h1>
        </Link>
        <footer>
          <img src={url} alt={title}/>
          <aside>
            <h3>{title}</h3>
            <h4>ID: {id}</h4>
          </aside>
        </footer>
      </article>
    </>
  )
}