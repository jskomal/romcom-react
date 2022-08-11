import { useState, useEffect } from 'react'
import { titles, covers, descriptors } from './data'
import { getRandomIndex, Cover } from './utils'
import Header from './components/Header'
import Main from './components/Main'
import Make from './components/Make'
import Saved from './components/Saved'

export type TcurrentCover = null | Cover

const App = () => {
  const [currentCover, setCurrentCover] = useState<TcurrentCover>(null)
  const [savedCovers, setSavedCovers] = useState<TcurrentCover[]>([])
  const [isSavedOpen, setIsSavedOpen] = useState(false)
  const [isMakeOpen, setIsMakeOpen] = useState(false)
  const [isMainHidden, setIsMainHidden] = useState(false)
  const [confirmationText, setConfirmationText] = useState('\u00a0')

  useEffect(() => {
    createNewCover()
  }, [])

  const createNewCover = () => {
    const coverImgSrc = covers[getRandomIndex(covers)]
    const title = titles[getRandomIndex(titles)]
    const descriptor1 = descriptors[getRandomIndex(descriptors)]
    const descriptor2 = descriptors[getRandomIndex(descriptors)]
    const cover = new Cover(coverImgSrc, title, descriptor1, descriptor2)
    setCurrentCover(cover)
  }

  const saveCover = (savedCovers: TcurrentCover[], currentCover: TcurrentCover) => {
    if (
      !savedCovers.some(
        (cover) =>
          cover?.cover === currentCover?.cover &&
          cover?.title === currentCover?.title &&
          cover?.tagline1 === currentCover?.tagline1 &&
          cover?.tagline2 === currentCover?.tagline2
      )
    ) {
      setSavedCovers((prev) => [...prev, currentCover])
      setConfirmationText('Cover Saved')
      resetConfirmationText()
    } else {
      setConfirmationText('Cannot save a Duplicate Cover')
      resetConfirmationText()
    }
  }

  const toggleSavedOpen = () => {
    setIsSavedOpen((prev) => !prev)
    setIsMainHidden((prev) => !prev)
  }

  const toggleMakeOpen = () => {
    setIsMakeOpen((prev) => !prev)
    setIsMainHidden((prev) => !prev)
  }

  const returnHome = () => {
    setIsMainHidden(false)
    setIsSavedOpen(false)
    setIsMakeOpen(false)
  }

  const deleteCover = (id?: number) => {
    const filteredCovers = savedCovers.filter((cover) => cover?.id !== id)
    setSavedCovers(filteredCovers)
  }

  const resetConfirmationText = () => {
    setTimeout(() => {
      setConfirmationText('\u00a0')
    }, 3000)
  }

  return (
    <>
      <Header
        createNewCover={createNewCover}
        saveCover={saveCover}
        toggleSavedOpen={toggleSavedOpen}
        toggleMakeOpen={toggleMakeOpen}
        isMainHidden={isMainHidden}
        returnHome={returnHome}
        savedCovers={savedCovers}
        currentCover={currentCover}
      />
      <p style={{ textAlign: 'center' }}>{confirmationText}</p>
      {!isMainHidden && <Main currentCover={currentCover} />}
      {isMakeOpen && (
        <Make setCurrentCover={setCurrentCover} toggleMakeOpen={toggleMakeOpen} />
      )}
      {isSavedOpen && <Saved savedCovers={savedCovers} deleteCover={deleteCover} />}
    </>
  )
}

export default App
