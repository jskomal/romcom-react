import './Main.css'
import { TcurrentCover } from '../App'

type MainProps = {
  currentCover: TcurrentCover
}

const Main = ({ currentCover }: MainProps) => {
  return (
    <main>
      <article className='cover'>
        <img src={currentCover?.cover} alt={currentCover?.title} />
        <h1>{currentCover?.title}</h1>
        <p>
          A tale of {currentCover?.tagline1} and {currentCover?.tagline2}
        </p>
      </article>
    </main>
  )
}

export default Main
