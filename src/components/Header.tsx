import React from 'react'
import { TcurrentCover } from '../App'
import './Header.css'

type HeaderProps = {
  createNewCover: () => void
  saveCover: (savedCovers: TcurrentCover[], currentCover: TcurrentCover) => void
  toggleSavedOpen: () => void
  toggleMakeOpen: () => void
  isMainHidden: boolean
  returnHome: () => void
  savedCovers: TcurrentCover[]
  currentCover: TcurrentCover
}

const Header = ({
  createNewCover,
  saveCover,
  toggleSavedOpen,
  toggleMakeOpen,
  isMainHidden,
  returnHome,
  savedCovers,
  currentCover
}: HeaderProps) => {
  const clickSave = () => {
    saveCover(savedCovers, currentCover)
  }
  return (
    <header>
      {isMainHidden && <button onClick={returnHome}>Home</button>}
      {!isMainHidden && <button onClick={createNewCover}>Show New Random Cover</button>}
      {!isMainHidden && <button onClick={clickSave}>Save Cover</button>}
      {!isMainHidden && <button onClick={toggleSavedOpen}>Show Saved Covers</button>}
      {!isMainHidden && <button onClick={toggleMakeOpen}>Make Your Own Cover</button>}
    </header>
  )
}

export default Header
