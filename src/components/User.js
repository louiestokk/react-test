import { Box,Typography } from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux";
import { getUserData } from '../redux/user/userSlice';
import Spinner from './Spinner';
import { getLoadingState } from '../redux/loading/loadingSlice';
import MapComp from './MapComp';
const User = () => {
  const {user} = useSelector(getUserData)
  const {loading} = useSelector(getLoadingState)

  return (
    <div style={{padding:'1rem'}}>
        {user?.map((el,i)=>(
            <Box key={i}>
            {loading? <Spinner />: <img id='user-img' src={el.picture.medium} alt={`randomUser/${el.name.first}-${el.name.last}`}/>}
            <Typography>{el.login.username}</Typography>
            <Typography>{el.email}</Typography>
            <Typography>{el.phone}</Typography>
            <Typography>{el.cell}</Typography>
            <Typography>Age: {el.dob.age}</Typography>
            <Typography>{el.location.country}, {el.location.city}</Typography>
            <Typography>Nat: {el.nat}</Typography>
            </Box>
        ))}
        <div>
        {user?.length>0 &&  <MapComp />}
        
        </div>
    </div>
  )
}

export default User