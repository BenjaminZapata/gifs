import React, { useEffect, useState } from 'react'

const Context = React.createContext({})

export function GifsContextProvider ({ children }) {
  const [ gifs, setGifs ] = useState([])
  const [ recentlySearched, setRecentlySearched ] = useState([])

  useEffect(() => {
    const recentlySearched = JSON.parse(localStorage.getItem('recentlySearched'))
  }, [])
  

  const eraseRecentlySearched = (arr) => {
    setRecentlySearched([])
  }

  const addToRecentlySearched = (keyword) => {
    if (recentlySearched.includes(keyword)) return
    else {
      let arr = recentlySearched
      if (arr.length >= 5){
        arr.shift()
      }
      arr.push(keyword)
      setRecentlySearched(arr)
      localStorage.setItem('recentlySearched', JSON.stringify(arr))
    }
  }

  return <Context.Provider value={{ gifs, setGifs, recentlySearched, addToRecentlySearched, eraseRecentlySearched }}>
      {children}
    </Context.Provider>
}

export default Context