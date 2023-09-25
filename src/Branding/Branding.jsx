import { Box, Button, Container, CssBaseline, Grid, Stack, Typography, styled } from '@mui/material'
import React from 'react'



const BrandingWrapper = styled(Box)(({theme}) => ({
  height: '70vh',
  backgroundColor: 'rgba(122, 178, 89, 0.15)',
  padding: theme.spacing(4),
}));


const Branding = () => {
  return (

    // <BrandingWrapper>
    // <CssBaseline/>
    <Container maxWidth='lg' sx={{backgroundColor:'#eee'}}>


    <Grid container spacing={3} justifyContent='space-around' alignItems='center' >
    <Grid item sm={6} md={3} lg={4} sx={{p:2}}>


      <Typography sx={{fontSize:'2rem', fontWeight:'900', lineHeight:'1.2'}} gutterBottom>
        Let's grow your brand <br /> to the next level
      </Typography>
      <Typography>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Amet consequatur earum quae.      
    </Typography>
    <Button variant='outlined' color='error' sx={{width:'33%',mt:2}}>Hire Us</Button>
    </Grid>
    <Grid item xs={12}sm={6} md={3} lg={4}>
      <img src="https://collegecliffs.com/wp-content/uploads/2021/06/The-15-Best-Study-Techniques-for-College-Success-in-2022-Featured-Image.png" alt="study" style={{width:'50vh'}}/>
    </Grid>
    
    </Grid>
    </Container>
    
    // </BrandingWrapper>
  )
}

export default Branding;