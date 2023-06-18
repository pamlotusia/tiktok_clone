import React, { useEffect, useState } from 'react'
import './App.css'
import Video from './pages/Video'
import db from './config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

function App() {
  const [videos, setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, 'videos')
    const videosSnapShot = await getDocs(videosCollection)
    const videosList = videosSnapShot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <div className="App">
      <div className="app__videos">

        {videos.map(item => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              saves={item.saves}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        })}

      </div>
    </div>
  )
}

export default App
