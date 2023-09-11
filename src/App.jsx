import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handlerBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  return (
    <div className='w-3/4 mx-auto'>
    <Header></Header>
    <div className='md:flex'>
    <Blogs handlerBookmark={handlerBookmark}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
    </div>
  )
}

export default App
