import React from 'react';
import { Grid, Typography } from '@mui/material';
import { IMAGES_PATH, COVER_PLACEHOLDER } from '../config';
import { styled } from '@mui/system';
import Movies from './Movies';



const GridStyle = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(10),
  marginTop: theme.spacing(5),
}))

const ImgStyled = styled('img')({
  width: '100%'
});



const Movie = ({ movie, genres }) => {

  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60) + 'h';
    const mins = Math.floor(runtime % 60) + 'm';

    return `${hours} ${mins}`;
  }

  return (

    <>
      <GridStyle container={true} spacing={5}>
        <Grid item={true} md={3}>
          {
            movie.poster_path ?
              <ImgStyled src={`${IMAGES_PATH}/w300${movie.poster_path}`} alt={movie.title} />
              :
              <ImgStyled src={COVER_PLACEHOLDER} alt={movie.title} />
          }
        </Grid>

        <Grid item={true} md={9}>
          <Typography component='h1' variant='h3' gutterBottom={true}>
            {movie.title}
          </Typography>

          {movie.tagline && (
            <>
              <Typography
                style={{
                  marginBottom: '10px',
                  paddingBottom: '10px',
                  borderBottom: 'solid #00d3be',
                  borderBottomWidth: 'thin'
                }}>
                <span style={{ fontWeight: '510', marginRight: '12px' }}>Tagline</span>
                {movie.tagline}</Typography>
            </>
          )}


          {movie.genres && (
            <>
              <Typography
                style={{
                  marginBottom: '10px',
                  paddingBottom: '10px',
                  borderBottom: 'solid #00d3be',
                  borderBottomWidth: 'thin'
                }}>
                <span style={{ fontWeight: '510', marginRight: '12px' }}>Genre</span>
                {movie.genres
                  .map((genre) => genre.name)
                  .join(", ")
                }</Typography>

            </>
          )}


          {movie.production_countries && (
            <>

              <Typography
                style={{
                  marginBottom: '10px',
                  paddingBottom: '10px',
                  borderBottom: 'solid #00d3be',
                  borderBottomWidth: 'thin'
                }}>
                <span style={{ fontWeight: '510', marginRight: '12px' }}>Country</span>
                {movie.production_countries
                  .map((country) => country.name)
                  .join(", ")
                }
              </Typography>
            </>
          )}


          {movie.runtime && (
            <>

              <Typography
                style={{
                  marginBottom: '10px',
                  paddingBottom: '10px',
                  borderBottom: 'solid #00d3be',
                  borderBottomWidth: 'thin'
                }}>
                <span style={{ fontWeight: '510', marginRight: '12px' }}>Runtime</span>
                {formatRuntime(movie.runtime)
                }
              </Typography>


            </>
          )}


          {movie.release_date && (
            <>

              <Typography
                style={{
                  marginBottom: '10px',
                  paddingBottom: '10px',
                  borderBottom: 'solid #00d3be',
                  borderBottomWidth: 'thin'
                }}>
                <span style={{ fontWeight: '510', marginRight: '12px' }}>Release Date</span>
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </Typography>
            </>
          )}


          {movie.overview && (
            <>

              <Typography
                style={{
                  marginBottom: '10px',
                  paddingBottom: '10px',
                  borderBottom: 'solid #00d3be',
                  borderBottomWidth: 'thin'
                }}>
                <span style={{ fontWeight: '510', marginRight: '12px' }}>Overview</span>
                {movie.overview}
              </Typography>
            </>
          )}

        </Grid>

      </GridStyle>
            
            {
              movie.recommendations && (
                <>
                  <Typography component='h2' variant='h4' gutterBottom={true} 
                  style={{ 
                  marginBottom:'30px',
                  borderLeft:'solid #00d3be',
                  borderRightWidth: 'bold',
                  paddingLeft:'10px'
                  }}>
                    More to explore
                  </Typography>
                  <Movies movies={movie.recommendations} genres={genres}/>
                </>
              )
            }
    </>
  )
}

export default Movie