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
    fontSize: matches ? 20 : 18
  };
  const cardTitle = {
    backgroundColor: '#1976d2',
    borderRadius: 2
  };
  const title = {
    paddingInline: 20,
    borderRadius: 20,
    backgroundColor: '#1976d2',
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
      <Box id={"precos"} fontFamily={'Poppins'}>
        <Box sx={box}>
          {/* <Card elevation={4} sx={cardTitle}> */}
            <h1 style={title}>
              {i18n.t('prices.mainTitle')}
            </h1>
          {/* </Card> */}
        </Box>
        <Box sx={{p:5, backgroundColor:'black'}}>
          <Grid container spacing={6}>
            <Grid data-anime={'leftDiagonal'} item md={4} xs={12}>
              <Card elevation={2} >
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
                    <CardActions sx={{display: 'flex', justifyContent:'center', bgcolor:'#1db954'}}>
                      Acesse
                    </CardActions>
                  </a>
              </Card>
            </Grid>
            <Grid data-anime={"center"} item md={4} xs={12}>
              <Card elevation={2} >
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
                    <CardActions sx={{display: 'flex', justifyContent:'center', bgcolor:'#1db954'}}>
                      Acesse
                    </CardActions>
                  </a>
              </Card>
            </Grid>
            <Grid data-anime={"rightDiagonal"} item md={4} xs={12}>
              <Card elevation={2} >
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
                    <CardActions sx={{display: 'flex', justifyContent:'center', bgcolor:'#1db954'}}>
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
