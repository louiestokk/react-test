import React from 'react'
import { Button } from '@mui/material'
const MainBtn = ({fetchRandomUser}) => {
  return (
    <div style={{marginTop:'30px'}}>
        <Button variant='contained' onClick={()=> fetchRandomUser()}>Get random user</Button>
    </div>
  )
}

export default MainBtn