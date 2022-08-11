import { TcurrentCover } from '../App'
import './MiniCover.css'

type MiniCoverProps = {
  cover: TcurrentCover
  deleteCover: (id?: number) => void
}

const MiniCover = ({ cover, deleteCover }: MiniCoverProps) => {
  return (
    <article className='mini-cover'>
      <img className='mini-img' src={cover?.cover} alt={cover?.title} />
      <p className='mini-title'>{cover?.title}</p>
      <p className='mini-description'>
        A tale of {cover?.tagline1} and {cover?.tagline2}
      </p>
      <button className='mini-delete' onClick={() => deleteCover(cover?.id)}>
        {'\u2715'}
      </button>
    </article>
  )
}

export default MiniCover
