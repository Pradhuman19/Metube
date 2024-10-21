import { BorderRight } from '@mui/icons-material'
import { Box, colors, Stack, Typography } from '@mui/material'
import React from 'react'
import {SideBar,Videos} from './'

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',
                px:{sx:0,md:2}}}>
                  <SideBar />
                  <Typography className='copyright' variant='body2'
                   sx={{mt:1.5,color:'white'}}>
                  Connect with me here
                  </Typography>
      </Box>
      <Typography
        variant="h4" fontWeight="bold"
        mb={2} sx={{
          color:'white'
        }}
      >New <span style={{colors:'#F31503'}}>Videos</span>
      </Typography>
      <Videos />
    </Stack>
  )
}

export default Feed
