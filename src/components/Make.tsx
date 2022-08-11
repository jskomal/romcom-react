import { TcurrentCover } from '../App'
import { useState } from 'react'
import { getRandomIndex, Cover } from '../utils'
import { covers } from '../data'
import './Make.css'

type MakeProps = {
  setCurrentCover: React.Dispatch<React.SetStateAction<TcurrentCover>>
  toggleMakeOpen: () => void
}

const Make = ({ setCurrentCover, toggleMakeOpen }: MakeProps) => {
  const [coverInput, setCoverInput] = useState('')
  const [titleInput, setTitleInput] = useState('')
  const [descriptor1Input, setDescriptor1Input] = useState('')
  const [descriptor2Input, setDescriptor2Input] = useState('')

  const makeCover = () => {
    const madeCover = new Cover(
      coverInput || covers[getRandomIndex(covers)],
      titleInput || "The Horsethief's Muster",
      descriptor1Input || 'sauce',
      descriptor2Input || 'intrigue'
    )
    setCurrentCover(madeCover)
    toggleMakeOpen()
  }

  return (
    <div className='make'>
      <input
        type='text'
        placeholder='Cover URL'
        value={coverInput}
        onChange={(e) => setCoverInput(e.target.value)}
      />
      <input
        type='text'
        placeholder='Title'
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <input
        type='text'
        placeholder='First Descriptor'
        value={descriptor1Input}
        onChange={(e) => setDescriptor1Input(e.target.value)}
      />
      <input
        type='text'
        placeholder='Second Descriptor'
        value={descriptor2Input}
        onChange={(e) => setDescriptor2Input(e.target.value)}
      />
      <button onClick={makeCover}>Make My Book</button>
    </div>
  )
}

export default Make
