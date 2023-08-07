import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies, resetState } from '../Redux/movies';
import Loader from '../components/Loader';
import { Typography } from '@mui/material';
import Movies from '../components/Movies';



const PopularMovies = () => {

  const dispatch = useDispatch();
  const { movies } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getPopularMovies());

    return () => {
      dispatch(resetState());
    }
  }, [dispatch]);

  const loadMore = () => {
    if (movies.hasMore) {
      dispatch(getPopularMovies(movies.page + 1));
    }
  }


  const handleScrollToTop = () => {
    window.scrollTo({top:0, behaviour:'smooth'});
    };

  return (

    movies.page === 0 && movies.isFetching ? <Loader />
      : <>


        <Typography
          style={{
            marginBottom: '30px',
            marginTop: '50px',
            borderLeft: 'solid #00d3be',
            borderRightWidth: 'bold',
            paddingLeft: '15px'
          }}
          component="h2"
          variant='h4'>
          Popular Movies
        </Typography>

        <div>
          <Movies movies={movies} genres={genres}
            dataLength={movies.totalResults}
            next={loadMore}
            hasMore={movies.hasMore}
            loader={<Loader />}
            style={{ overFlow: 'hidden', }} />



          <a href="/">
            <button className='topBtn'onClick={handleScrollToTop}>
              &#8593;
            </button>
          </a>

          <button className='loadmoreBtn' dataLength={movies.totalResults}
            next={loadMore}
            hasMore={movies.hasMore}
            loader={<Loader />}
            onClick={loadMore}>
            See more
          </button>
        </div>

      </>

  )
}

export default PopularMovies