import React from 'react'
import { Button } from '@mui/material'
const MainBtn = ({fetchRandomUser}) => {
  return (
    <div style={{margin:'30px 0'}}>
        <Button variant='contained' onClick={()=> fetchRandomUser()}>Get random user</Button>
    </div>
  )
}

export default MainBtn