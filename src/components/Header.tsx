import React from 'react'
import './Header.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <button>Show New Random Cover</button>
      <button>Save Cover</button>
      <button>Show Saved Covers</button>
      <button>Make Your Own Cover</button>
    </header>
  )
}

export default Header
