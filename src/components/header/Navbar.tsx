import React from 'react'
import Top from './Top'
import Bottom from './Bottom'
import Center from './Center'

function Navbar() {
  return (
    <div className="w-full h-[198px]">
      <Top />
      <Center />
      <Bottom />
    </div>
  )
}

export default Navbar
