import React from 'react';
import {Box, Card, Grid, useMediaQuery} from '@mui/material';
import { i18n } from '../translate/i18n';
import { BsPatchCheckFill } from 'react-icons/bs';
import "./experience.css";


const Solutions = () => {
  //ESTILOS SOLUTIONS
  const matches = useMediaQuery('(min-width:1000px)');
  const box = {
    marginY: 5,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    fontSize: matches ? 24 : 18
  };
  const titleCard = {
    backgroundColor: '#1db954',
    borderRadius: 2
  };
  const title = {
    paddingInline: 20,
    borderRadius: 20,
    backgroundColor: '#1db954',
    color: 'white'
  };
  const gridContainerWhite = {
    p: 5,
    color: 'white',
    width: matches ? '70%' : '100%',
  };
  const gridContainerBlue = {
    p: 5,
    color: '#1976d2',
    width: matches ? '70%' : '100%',
  };
  const solutionBoxBlue = {
    fontFamily: 'Poppins',
    backgroundColor: '#1976d2',
    display: 'flex',
    justifyContent: 'center',
  };
  const solutionBoxWhite= {
    fontFamily: 'Poppins',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
  };


  return (
    <>
    <Box sx={{p:5}} id="experience">
    <Box id={"solucoes"} data-anime={"left"}
           sx={box}>
        <Card elevation={4} sx={titleCard}>
          <h1 style={title}>
            {i18n.t('solutions.mainTitle')}
          </h1>
        </Card>
      </Box>
      <Box sx={box}>
      <div className="container experience_container">
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h3>HTML</h3>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h3>HTML</h3>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h3>HTML</h3>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h3>HTML</h3>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h3>HTML</h3>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h3>HTML</h3>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h3>HTML</h3>
              </div>
            </article>
          </div>
        </div>
      </div>
      </Box>
    </Box>
      <Box
        sx={solutionBoxBlue}>
        <Grid container sx={gridContainerWhite}>
          <Grid data-anime={"left"} sx={{backgroundColor:'pink', borderRadius:5, p:3, }} item md={6} xs={12}>
            <Box sx={{display:'flex', justifyContent:'center'}}>
              <h3>Desenvolvimento FrontEnd</h3>
            </Box>
            <Grid container sx={{}}>
              <Grid item md={6}>
                <Grid container sx={{p:1}}>
                  <Grid item md={2} sx={{textAlign:'center'}}>
                    <BsPatchCheckFill className="experience_details-icon" />
                  </Grid>
                  <Grid item md={10}>
                    <Box sx={{display: 'flex', alignItems:'center', ml:2,}}> 
                      <h3>HTML</h3>
                      <small style={{marginLeft:20}} className='text-light'>Avançado</small>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container sx={{p:1}}>
                  <Grid item md={2} sx={{textAlign:'center'}}>
                    <BsPatchCheckFill className="experience_details-icon" />
                    {/* <p>c3</p> */}
                  </Grid>
                  <Grid item md={10}>
                    <h3>HTML</h3>
                    <small style={{marginBottom:10}} className='text-light'>Avançado</small>
                  </Grid>
                </Grid>  
                <Grid container sx={{p:1}}>
                  <Grid item md={2} sx={{textAlign:'center'}}>
                    <BsPatchCheckFill className="experience_details-icon" />
                    {/* <p>c3</p> */}
                  </Grid>
                  <Grid item md={10}>
                    <h3>HTML</h3>
                    <small style={{marginBottom:10}} className='text-light'>Avançado</small>
                  </Grid>
                </Grid>    
                </Grid>
                  <Grid item md={6} xs={12}>
                  <Grid container sx={{p:1}}>
                  <Grid item md={2} sx={{textAlign:'center'}}>
                    <BsPatchCheckFill className="experience_details-icon" />
                    {/* <p>c3</p> */}
                  </Grid>
                  <Grid item md={10}>
                    <h3>HTML</h3>
                    <small style={{marginBottom:10}} className='text-light'>Avançado</small>
                  </Grid>
                </Grid>  
              </Grid>
            </Grid>  
          </Grid>
          <Grid item data-anime={"image"} md={6} xs={12} sx={{textAlign: '-webkit-right'}}>
            <Box>
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_z01bika0.json"
                speed="1"
                style={{width: 300, height: 300}}
                loop={true}
                autoplay={true}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      
    </>
  );
};

export default Solutions;
