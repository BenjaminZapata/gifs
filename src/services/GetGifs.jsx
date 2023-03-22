import { APIUrl, APIKey } from './APIConfig'

export default function getGifs ({ keyword }) {
  const url = `${APIUrl}/search?api_key=${APIKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`



  return fetch(url)
    .then(resp => resp.json())
    .then(resp => { 
      const { data = [] } = resp
      if (Array.isArray(data)){
        const gifs = data.map(gif => {
          const { images, title, id, user, username } = gif
          const { url } = images.downsized_medium
          return { title, id, url, user, username }
        })
      return gifs
      }
      return []
    })
}