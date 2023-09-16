import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Typography } from "@mui/material";






function App() {
  



  return (
    <Container maxWidth='xl'>
      <CssBaseline/>
    <Typography sx={{mt:3,color:'#797965'}} variant="h6" textAlign='center' gutterBottom>Card values</Typography>

        <Grid container spacing={1}>
          <Grid item   sm={6} md={3} >

          <Card sx={{maxWidth:400}}>
            <CardMedia sx={{height:250}} image="https://st3.depositphotos.com/1049680/37484/i/450/depositphotos_374848662-stock-photo-young-handsome-man-beard-wearing.jpg" title='pictures'/>
            <CardContent>
              <Typography gutterBottom variant="h6" component='h2'>
                Mr. Alex Huge
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque nam dicta suscipit assumenda porro! Officiis provident at totam aut?
              </Typography>

            </CardContent>
            <CardActions>
              <Button variant="contained">Click Here</Button>
              <Button variant="outlined">Learn More</Button>
            </CardActions>
          </Card>

          </Grid>
          <Grid item sm={6} md={3} >

          <Card sx={{maxWidth:400}}>
            <CardMedia sx={{height:250}} image="https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_640.jpg" title='pictures'/>
            <CardContent>
              <Typography gutterBottom variant="h6" component='h2'>
                Mr. Alex Huge
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque nam dicta suscipit assumenda porro! Officiis provident at totam aut?
              </Typography>

            </CardContent>
            <CardActions>
              <Button variant="contained">Click Here</Button>
              <Button variant="outlined">Learn More</Button>
            </CardActions>
          </Card>

          </Grid>
          <Grid item sm={6} md={3} >

          <Card sx={{maxWidth:400}}>
            <CardMedia sx={{height:250}} image="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" title='pictures'/>
            <CardContent>
              <Typography gutterBottom variant="h6" component='h2'>
                Mr. Alex Huge
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque nam dicta suscipit assumenda porro! Officiis provident at totam aut?
              </Typography>

            </CardContent>
            <CardActions>
              <Button variant="contained">Click Here</Button>
              <Button variant="outlined">Learn More</Button>
            </CardActions>
          </Card>

          </Grid>
          <Grid item sm={6} md={3} >

          <Card sx={{maxWidth:400}}>
            <CardMedia sx={{height:250}} image="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e" title='pictures'/>
            <CardContent>
              <Typography gutterBottom variant="h6" component='h2'>
                Mr. Alex Huge
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque nam dicta suscipit assumenda porro! Officiis provident at totam aut?
              </Typography>

            </CardContent>
            <CardActions>
              <Button variant="contained">Click Here</Button>
              <Button variant="outlined">Learn More</Button>
            </CardActions>
          </Card>

  </Grid>

</Grid>
        

    </Container>
  )
}

export default App;
