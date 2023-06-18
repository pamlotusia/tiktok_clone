import React, { useState } from 'react'
import './videoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MessageIcon from '@mui/icons-material/Message'
import ShareIcon from '@mui/icons-material/Share'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

function VideoSidebar({ likes, messages, saves, shares }) {
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
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="videoSidebar__options">
        <MessageIcon sx={{ fontSize: 30 }} />
        <p>{messages}</p>
      </div>

      <div className="videoSidebar__options" onClick={handdleSaved}>
        {saved ? (
          <BookmarkIcon sx={{ fontSize: 30 }} />
        ) : (
          <BookmarkBorderIcon sx={{ fontSize: 30 }} />
        )}

        <p>{saved ? saves + 1 : saves}</p>
      </div>

      <div className="videoSidebar__options">
        <ShareIcon sx={{ fontSize: 30 }} />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar
