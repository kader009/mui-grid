import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react'


const Services = () => {
  return (
    <Box alignItems='center'>
      <Typography variant='h5' align='center' sx={{mt:3,  fontWeight:'bold'}} gutterBottom>Provide awesome <span style={{color:'green'}}>Services</span> </Typography>

    <Container maxWidth='lg' sx={{mt:3}}>
      <Grid container  spacing={2}>
        <Grid item sm={6} md={4} lg={4}>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{height:200}} image='https://www.callcentrehelper.com/images/stories/2022/10/cs-empathy-statements-127593101-760.jpg' title="images"/>
        <CardContent>
          <Typography variant='h6' component='p'>Customer services</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente saepe fuga!
          </Typography>
        </CardContent>
      </Card>

        </Grid>
        <Grid item sm={6} md={4} lg={4}>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{height:200}} image='https://thumbs.dreamstime.com/b/our-services-symbol-words-appearing-behind-torn-orange-paper-beautiful-background-business-service-concept-203604584.jpg' title="images"/>
        <CardContent>
          <Typography variant='h6' component='p'>Customer services</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente saepe fuga!
          </Typography>
        </CardContent>
      </Card>

        </Grid>
        <Grid item sm={6} md={4} lg={4}>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{height:200}} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseb2cZanT5BEFbkrl8hnnYEpH62NWEnIvBQ&usqp=CAU' title="images"/>
        <CardContent>
          <Typography variant='h6' component='p'>Customer services</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente saepe fuga!
          </Typography>
        </CardContent>
      </Card>

        </Grid>
      </Grid>
    </Container>

    

    </Box>
  )
}

export default Services;