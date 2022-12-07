import { Link } from 'wouter'

export function Gif ({ params }) {
  const { title, url, id } = params
  return(
    <>
      <Link to={`/gif/${id}`}>
        <li className="gif">
          <img src={url} alt={title}/>
          <p>{title}</p>
        </li>
      </Link>
    </>
  )
}