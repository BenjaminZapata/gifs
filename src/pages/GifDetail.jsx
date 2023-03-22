import { useContext } from "react"
import { Link } from 'wouter'
import GifsContext from "../contexts/GifsContext"

export function GifDetail ({params}) {
  const { gifs } = useContext(GifsContext)
  const { id } = params
  const keyword = localStorage.getItem("keyword")
  const gif = gifs.find(gif => gif.id === id)
  const { url, title, user, username } = gif

  const displayUserInfo = () => {
    if (user !== undefined && user !== undefined){
      return <div className="userInfo"><img loading="lazy" src={user.avatar_url}/><h4>{username}</h4></div>
    }
  }

  return(
    <>
      <article className="gifDetails">
        <Link to='/'>
          <h1 className='mainTitle'>MyGifs</h1>
        </Link>
        <header>
          <img src='/icons/back.png'/>
          <Link to={`/search/${keyword}`}><p>Volver a {keyword}</p></Link>
        </header>
        <footer>
          <img loading="lazy" className="gif" src={url} alt={title}/>
          <aside>
            <h3>{title}</h3>
            <h5>ID: {id}</h5>
            {displayUserInfo()}
          </aside>
        </footer>
      </article>
    </>
  )
}