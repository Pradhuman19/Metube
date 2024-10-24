import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {VideoCard,ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetails = () => {
  const {id} = useParams();
  const [channelDetails, setChannelDetails] = useState(null)

  // console.log(channelDetails);
  // useEffect(() => {
  //   fetchFromAPI(`channel?part=snippet&id=${id}`)
  //   .then((data) => setChannelDetails(data?.items[0]));
  // }, [id])
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        console.log(data);  // Log the full API response to inspect it
        setChannelDetails(data?.items[0]);  // Fix: use 'items' instead of 'item'
      });
  }, [id]);

  
  return (
    <div>
      {id}
    </div>
  )
}

export default ChannelDetails
