import EmbeddedMenu from '@/components/EmbeddedMenu'
import React from 'react'
import Menu from '../components/Menu'
import Navbar from '@/components/Navbar'

const swedeMenu = () => {
  return (
    <div className=' bg-gray-400'>
      <Navbar />
      <div className='mb-20'>


        <Menu />
        {/* <EmbeddedMenu /> */}
        </div>

    </div>
  )
}

export default swedeMenu