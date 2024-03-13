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
  const handleMarkAsRead = (time, id) =>{
    console.log('marking as read', time)
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)

    //remove the read blog from bookmark
    /* amra jodi kono id dei,taile id dhore amra remove korte parbo */
    console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
    /*bookmarks e jegula ase shekhan theke filter korbo, kore amra alada alada kore bookmark pailam,ekhon prottek bookmark er j id ase (bookmark.id) sheta not equals to id , mane ami jei id ta markasread korsi oita na, oita baade baki gula deo  */
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
