import { useState } from "react"
import { useLocation } from 'wouter'

export default function SearchBar () {
  const [ keyword, setKeyword ] = useState('')
  const [path, pushLocation] = useLocation()

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
    setKeyword(e.target[0].value)
  }

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input type='text' placeholder="Busca tus gifs..." value={ keyword } onChange={ handleChange }/>
      <button><img alt='Buscar' src="/icons/search.png"/></button>
    </form>
  )
}