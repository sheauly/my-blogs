
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0)


  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked,blog])
  }
  // console.log(bookmarked)

  const handleMarkAsRead = (time,id) => {
    const newTime = readingCount + time;
    setReadingCount(newTime);
    handleRemoveFromBookMark(id)
  }
  // console.log(readingCount)

  const handleRemoveFromBookMark = (id) => {
    const remainigBookMark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainigBookMark)
  }

  return (
    <>
      <Navbar></Navbar>
      
      <div className='main-container flex text-center'>
        <div className="left-container w-[70%]">
          
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading time: {readingCount}</h1>
          <h1>Bookmarked Count: {bookmarked.length}</h1>
          {
            bookmarked.map((marked) => <p className='bg-red-400 m-2 text-white shadow'>{marked.title}</p>)
          }
        </div>
        
      </div>
    </>
  )
}

export default App
