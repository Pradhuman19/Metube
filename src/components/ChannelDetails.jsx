import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {VideoCard,ChannelCard, Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetails = () => {
  const {id} = useParams();
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])

  console.log(videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetails(data?.items[0]);  // Fix: use 'items' instead of 'item'
      });
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items);  // Fix: use 'items' instead of 'item'
      });
      
      
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetails} marginTop="-110px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails
