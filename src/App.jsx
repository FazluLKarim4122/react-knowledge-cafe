import { useEffect, useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks]=useState([])
  /*event handler e kake add korbo normally 1ta blog ke add korbos */
  const handleAddToBookmark = blog =>{
    console.log('bookmark adding soon')
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex container mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
