import { Link } from "wouter"

export default function WordTag ({word}) {
  return(
    <Link to={`/search/${word}`}><span className='wordTag'>{word}</span></Link>
  )
}