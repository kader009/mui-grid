import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { Link  } from 'react-router-dom';

const Mania = () => {


  return (
    
  <AppBar position="fixed" color="primary" sx={{p:"0 5%",}} >
      <Toolbar sx={{justifyContent:"space-between"}}>
        <h3>
          Appbar
        </h3>
        <Box sx={{display:'flex', alignItems:'center', }}> 
        <Button color='error' variant='text'>

        <Link to='/home'>Home</Link>
        </Button>

        <Button color='success' > Home</Button>
        <Button color='success'>About </Button>
        <Button color='success'> Blog</Button>
        
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Mania;