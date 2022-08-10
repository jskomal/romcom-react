import { useState, useEffect } from 'react'
import { titles, covers, descriptors } from './data'
import { getRandomIndex, Cover } from './utils'
import Header from './components/Header'
import Main from './components/Main'

export type TcurrentCover = null | Cover

const App = () => {
  const [currentCover, setCurrentCover] = useState<TcurrentCover>(null)

  useEffect(() => {
    const coverImgSrc = covers[getRandomIndex(covers)]
    const title = titles[getRandomIndex(titles)]
    const descriptor1 = descriptors[getRandomIndex(descriptors)]
    const descriptor2 = descriptors[getRandomIndex(descriptors)]
    const cover = new Cover(coverImgSrc, title, descriptor1, descriptor2)
    setCurrentCover(cover)
  }, [])

  return (
    <div>
      <Header />
      <Main currentCover={currentCover} />
    </div>
  )
}

export default App
