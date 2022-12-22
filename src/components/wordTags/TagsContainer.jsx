import WordTag from "./WordTag"

export default function TagsContainer ({words}) {
  return(
    <section className='tagsContainer'>
      <h3>Tags mas buscados</h3>
      <ul className='tags'>
        {words.map( word => {
          return <WordTag word={word} key={word}></WordTag>
        })}
      </ul>
    </section>
  )  
  
}