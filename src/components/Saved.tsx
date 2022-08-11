import './Saved.css'
import { TcurrentCover } from '../App'
import MiniCover from './MiniCover'

type SavedProps = {
  savedCovers: TcurrentCover[]
  deleteCover: (id?: number) => void
}

const Saved = ({ savedCovers, deleteCover }: SavedProps) => {
  let miniCovers
  if (savedCovers[0]) {
    miniCovers = savedCovers.map((cover, i) => (
      <MiniCover key={i} cover={cover} deleteCover={deleteCover} />
    ))
  }

  return <section className='saved'>{miniCovers}</section>
}

export default Saved
