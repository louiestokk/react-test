import React from 'react'
import { Box,Typography,Card } from '@mui/material'
import { useSelector } from "react-redux";
import { getUserData } from '../redux/user/userSlice';
import Spinner from './Spinner';
import { getLoadingState } from '../redux/loading/loadingSlice';
import MapComp from './MapComp';
import { Link } from 'react-router-dom';
import { Person,Email,Smartphone } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
const User = () => {
  const {user} = useSelector(getUserData)
  const {loading} = useSelector(getLoadingState)
  const location = useLocation();
  return (
    <div style={{padding:'1rem',height:'100vh'}}>
        {user?.map((el,i)=>(
            <Box key={i}>
            <Link to={`/user/${el.login.username}`}>
            <Card id='user-card'>
            {loading? <Spinner />: <img id='user-img' src={el.picture.medium} alt={`randomUser/${el.name.first}-${el.name.last}`}/>}
            <Box id='user-details'>
            <Person id='user-icons'/>
            <Typography variant='h6'>{el.login.username}</Typography>
            </Box>
            <Box id='user-details'>
          <Email id='user-icons' />
            <Typography variant='p'>{el.email}</Typography>
            </Box>
            <Box id='user-details'>
              <Smartphone id='user-icons'/>
              <Typography variant='p'>{el.cell}</Typography>
            </Box>
           {location.pathname !== '/' && <Box id='user-details'> 
            <Typography>{el.phone}</Typography>, 
            <Typography>Age: {el.dob.age}</Typography>,
            <Typography>{el.location.country}, {el.location.city}</Typography>,
            <Typography>Nat: {el.nat}</Typography>
            </Box>}
            </Card>
            </Link>
            </Box>
        ))}
        <div>
        {user?.length>0 &&  <MapComp />}
        
        </div>
    </div>
  )
}

export default User