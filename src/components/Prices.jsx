import React from 'react';
import {Box, Card, useMediaQuery, Grid, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {i18n} from '../translate/i18n';


const Prices = () => {
  //ESTILOS PRICES
  const matches = useMediaQuery('(min-width:1000px)');

  const box = {
    display: 'flex',
    backgroundColor:'black',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    // fontSize: matches ? 20 : 18
  };
  const cardTitle = {
    backgroundColor: '#1976d2',
    borderRadius: 2,
    
  };
  const title = {
    fontSize: 18,
    fontSize: matches ? 40 : 30,
    paddingInline: 20,
    borderRadius: 20,
    backgroundColor: '#4dab6d',
    color: 'white'
  };
  const container = {
    display: 'flex',
    flexDirection: matches ? 'row' : 'column',
    height: '100%',
    justifyContent: 'center',

  };
  const standardCard = {
    mt: '5%',
    p: 5
  };
  const standardCardTitle = {
    p: 2,
    backgroundColor: '#1976d2',
    color: 'white',
    borderRadius: 2,
    textAlign: 'center'
  };
  const option = {
    fontSize: 20,
    marginBottom: 20
  };
  const standardCardPrice = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  };
  const premiumCard = {
    mt: '5%',
    p: 5,
    fontFamily: 'Poppins',
    marginBottom: 6,
  };
  const premiumCardTitle = {
    p: 2,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 2,
    textAlign: 'center'
  };
  const buttonBox = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5
  };
  const button = {
    '&:hover': {
      color: '#1976d2',
      backgroundColor: 'white',
    },
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'Poppins'
  };


  return (
    <>
      <Box id={"precos"} fontFamily={'Poppins'} sx={{bgcolor:'black'}}>
        <Box sx={box}>
            <h1 style={title}>
              {i18n.t('prices.mainTitle')}
            </h1>
          {/* </Card> */}
        </Box>
        <Box sx={{p:5, backgroundColor:'black'}}>
          <Grid data-anime={'left'} container spacing={6}>
            <Grid item md={4} xs={12}>
              <Card sx={{borderRadius:4}} elevation={2} >
                <CardMedia
                  component="img"
                  alt="checkspeech Ai image"
                  height="140"
                  image="https://media.licdn.com/dms/image/C5616AQHNuU0OOAnzDg/profile-displaybackgroundimage-shrink_350_1400/0/1642131195313?e=1678320000&v=beta&t=9NCT2EHlkR87Fcmst1pFyfV8jrg8JJcPqhVGFOLZK-0"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    CheckSpeech AI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Um Exemplo de site para a venda de uma API de serviços de conversão de áudio em texto
                  </Typography>
                </CardContent>
                  <a style={{textDecoration:'none', color:'white'}} href="https://google.com" target="_blank" rel="noreferrer">
                    <CardActions sx={{display: 'flex', justifyContent:'center', bgcolor:'#4dab6d'}}>
                      Acesse
                    </CardActions>
                  </a>
              </Card>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card sx={{borderRadius:4}} elevation={2} >
                <CardMedia
                  component="img"
                  alt="checkspeech Ai image"
                  height="140"
                  image="https://media.licdn.com/dms/image/C5616AQHNuU0OOAnzDg/profile-displaybackgroundimage-shrink_350_1400/0/1642131195313?e=1678320000&v=beta&t=9NCT2EHlkR87Fcmst1pFyfV8jrg8JJcPqhVGFOLZK-0"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    CheckSpeech AI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Um Exemplo de site para a venda de uma API de serviços de conversão de áudio em texto
                  </Typography>
                </CardContent>
                  <a style={{textDecoration:'none', color:'white'}} href="https://google.com" target="_blank" rel="noreferrer">
                    <CardActions sx={{display: 'flex', justifyContent:'center', bgcolor:'#4dab6d'}}>
                      Acesse
                    </CardActions>
                  </a>
              </Card>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card sx={{borderRadius:4}} elevation={2} >
                <CardMedia
                  component="img"
                  alt="checkspeech Ai image"
                  height="140"
                  image="https://media.licdn.com/dms/image/C5616AQHNuU0OOAnzDg/profile-displaybackgroundimage-shrink_350_1400/0/1642131195313?e=1678320000&v=beta&t=9NCT2EHlkR87Fcmst1pFyfV8jrg8JJcPqhVGFOLZK-0"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    CheckSpeech AI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Um Exemplo de site para a venda de uma API de serviços de conversão de áudio em texto
                  </Typography>
                </CardContent>
                  <a style={{textDecoration:'none', color:'white'}} href="https://google.com" target="_blank" rel="noreferrer">
                    <CardActions sx={{display: 'flex', justifyContent:'center', bgcolor:'#4dab6d'}}>
                      Acesse
                    </CardActions>
                  </a>
              </Card>
            </Grid>
          </Grid>
          <Grid sx={{mt:1}} data-anime={'right'} container spacing={6}>
            <Grid item md={4} xs={12}>
              <Card sx={{borderRadius:4}} elevation={2} >
                <CardMedia
                  component="img"
                  alt="checkspeech Ai image"
                  height="140"
                  image="https://media.licdn.com/dms/image/C5616AQHNuU0OOAnzDg/profile-displaybackgroundimage-shrink_350_1400/0/1642131195313?e=1678320000&v=beta&t=9NCT2EHlkR87Fcmst1pFyfV8jrg8JJcPqhVGFOLZK-0"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    CheckSpeech AI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Um Exemplo de site para a venda de uma API de serviços de conversão de áudio em texto
                  </Typography>
                </CardContent>
                  <a style={{textDecoration:'none', color:'white'}} href="https://google.com" target="_blank" rel="noreferrer">
                    <CardActions sx={{display: 'flex', justifyContent:'center', bgcolor:'#4dab6d'}}>
                      Acesse
                    </CardActions>
                  </a>
              </Card>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card sx={{borderRadius:4}} elevation={2} >
                <CardMedia
                  component="img"
                  alt="checkspeech Ai image"
                  height="140"
                  image="https://media.licdn.com/dms/image/C5616AQHNuU0OOAnzDg/profile-displaybackgroundimage-shrink_350_1400/0/1642131195313?e=1678320000&v=beta&t=9NCT2EHlkR87Fcmst1pFyfV8jrg8JJcPqhVGFOLZK-0"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    CheckSpeech AI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Um Exemplo de site para a venda de uma API de serviços de conversão de áudio em texto
                  </Typography>
                </CardContent>
                  <a style={{textDecoration:'none', color:'white'}} href="https://google.com" target="_blank" rel="noreferrer">
                    <CardActions sx={{display: 'flex', justifyContent:'center', bgcolor:'#4dab6d'}}>
                      Acesse
                    </CardActions>
                  </a>
              </Card>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card sx={{borderRadius:4}} elevation={2} >
                <CardMedia
                  component="img"
                  alt="checkspeech Ai image"
                  height="140"
                  image="https://media.licdn.com/dms/image/C5616AQHNuU0OOAnzDg/profile-displaybackgroundimage-shrink_350_1400/0/1642131195313?e=1678320000&v=beta&t=9NCT2EHlkR87Fcmst1pFyfV8jrg8JJcPqhVGFOLZK-0"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    CheckSpeech AI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Um Exemplo de site para a venda de uma API de serviços de conversão de áudio em texto
                  </Typography>
                </CardContent>
                  <a style={{textDecoration:'none', color:'white'}} href="https://google.com" target="_blank" rel="noreferrer">
                    <CardActions sx={{display: 'flex', justifyContent:'center', bgcolor:'#4dab6d'}}>
                      Acesse
                    </CardActions>
                  </a>
              </Card>
            </Grid>
          </Grid>
          
        </Box>
      </Box>
    </>
  );
};

export default Prices;
