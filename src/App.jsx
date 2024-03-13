import { useEffect, useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks]=useState([])
  /*event handler e kake add korbo normally 1ta blog ke add korbos */
  const handleAddToBookmark = blog =>{
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const [readingTime,setReadingTime]= useState(0) /* state e ki dekhabo array naki kotkhon porsi tar time, shonkha dekhabo.default 0*/
  const handleMarkAsRead = time =>{
    console.log('marking as read', time)
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex container mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} 
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      {/* bookmarks kotogula ase sheta pathay dite pari <Bookmarks> e.
      ## readingTime koto gula ase sheta dekhte hole pathate hobe bookmarks */}
      </div>
    </>
  )
}

export default App
