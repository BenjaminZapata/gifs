import { useContext } from "react"
import { Link } from 'wouter'
import GifsContext from "../contexts/GifsContext"

export function GifDetail ({ params }) {
  const { gifs } = useContext(GifsContext)
  const { id } = params
  const keyword = localStorage.getItem("keyword")
  const gif = gifs.find(gif => gif.id === id)
  const { url, title, user, username, images } = gif

  const displayUserInfo = () => {
    if (user !== undefined && user !== undefined){
      return <div className="userInfo"><img loading="lazy" src={user.avatar_url}/><h4>{username}</h4></div>
    }
  }

  const handleDownload = () => {
    fetch(images.original.url)
      .then(resp => resp.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title}.gif`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
  }

  return(
    <>
      <article className="gifDetails">
        <Link to='/'>
          <h1 className='mainTitle'>MyGifs</h1>
        </Link>
        <header>
          <Link to={`/search/${keyword}`}>
            <img src='/icons/back.png'/>
            <p>Volver a {keyword}</p>
          </Link>
        </header>
        <footer>
          <picture>
            <img loading="lazy" className="gif" src={images.original.url} alt={title}/>
            <div className="gifHover">
              <a href={images.original.url} target='_blank'><img src="/icons/link.png" alt="Abrir" /></a>
              <img src="/icons/download.png" alt="Descargar" onClick={handleDownload}/>
            </div>
          </picture>
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