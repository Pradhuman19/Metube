import React from 'react'
import { Stack,Box } from '@mui/material'
import {VideoCard,ChannelCard,PlaylistCard} from "./";

const Videos = ({videos}) => {
  return (
    // <div>videos</div>
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video = {item}/>}
          {item.id.channelId && <ChannelCard channelDetail = {item}/>}
          {/* {item.id.playlistID && <PlaylistCard playlistDetail = {item}/>} */}
          
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
