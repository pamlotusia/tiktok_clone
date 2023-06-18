import React, { useState } from 'react'
import './videoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MessageIcon from '@mui/icons-material/Message'
import ShareIcon from '@mui/icons-material/Share'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

function VideoSidebar() {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  function handdleLike() {
    setLiked(!liked)
  }

  function handdleSaved() {
    setSaved(!saved)
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__options" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon sx={{ fontSize: 30 }} />
        ) : (
          <FavoriteBorderIcon sx={{ fontSize: 30 }} />
        )}
        <p>{liked ? 1000 + 1 : 300}</p>
      </div>

      <div className="videoSidebar__options">
        <MessageIcon sx={{ fontSize: 30 }} />
        <p>34</p>
      </div>

      <div className="videoSidebar__options" onClick={handdleSaved}>
        {saved ? (
          <BookmarkIcon sx={{ fontSize: 30 }} />
        ) : (
          <BookmarkBorderIcon sx={{ fontSize: 30 }} />
        )}

        <p>{saved ? 65+ 1 : 300}</p>
      </div>

      <div className="videoSidebar__options">
        <ShareIcon sx={{ fontSize: 30 }} />
        <p>106</p>
      </div>
    </div>
  )
}

export default VideoSidebar
