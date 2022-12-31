import React from 'react';
import {Box, Divider, Grid, useMediaQuery} from '@mui/material';
import { i18n } from '../translate/i18n';
import ProfilePicture from './ProfilePicture';

const Initial = () => {
  //ESTILOS DE INITIAL
  const matches = useMediaQuery('(min-width:900px)');
  const box = {
    fontFamily: 'Poppins',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    marginTop: matches ? 10 : 5
  };
  const gridContainer = {
    p: 5,
    color: 'white',
    width: matches ? '70%' : '100%'
  };
  const title = {
    fontSize: 40,
    color: 'white',

  };
  const detailBox = {
    borderWidth: 2,
    borderColor: '#1DB954',
    borderStyle: 'solid',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    padding: 5,
    backgroundColor: 'white',
    color: 'black'
  };
  const animation = {
    paddingTop: matches?0:15,
    borderRadius: 100,
    borderTopLeftRadius: 1,
    width: matches ? 500 : 300,
    height: matches ? 500 : 300
  };


  return (
    <>
      <Box sx={box}>
        <Grid container sx={gridContainer}>
          <Grid item md={6} xs={12}>
            <h1 style={title}>{i18n.t('initial.title')}</h1>
            <Divider/>
            <h2>{i18n.t('initial.subtitles')}</h2>
            <Box style={detailBox}>
              <h3>
                {i18n.t('initial.detail1')}
              </h3>
              <h3>
                {i18n.t('initial.detail2')}
              </h3>
              <h3>
                {i18n.t('initial.detail3')}
              </h3>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sx={{textAlign: matches?'-webkit-right': null}}>
            <Box>
            <ProfilePicture
              style={animation}
            />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Initial;
