import { BorderRight } from '@mui/icons-material'
import { useState,useEffect } from 'react'
import { Box, colors, Stack, Typography } from '@mui/material'
import React from 'react'
import {SideBar,Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useAsyncValue } from 'react-router-dom'

const Feed = () => {
const [selectedCategory, setSelectedCategory] = useState('New');
const [videos, setVideos] = useState([])
  useEffect(()=>{
    // setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      // Filter out playlists by checking if kind is not 'youtube#playlist'
      const filteredResults = data.items.filter(
        (item) => item.id.kind !== 'youtube#playlist'
      );
      setVideos(filteredResults);
    });
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',
                px:{sx:0,md:4}}}>
                  <SideBar 
                  selectedCategory = {selectedCategory}
                  setSelectedCategory = {setSelectedCategory}
                  />
                  <Typography className='copyright' variant='body2'
                   sx={{mt:1.5,color:'white'}}>
                  Connect with me here
                  </Typography>
      </Box>
      <Box p={1.4} sx={{overflowY: 'auto',height:'90vh',flex:2}}>
      <Typography
        variant="h4" fontWeight="bold"
        mb={2} sx={{
          color:'white'
        }}
      >{selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
      </Typography>
      <Videos videos = {videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
