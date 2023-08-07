import React from 'react'
import Search from '../components/Search';
import { useSelector } from 'react-redux';

const SearchMovies = () => {

  const {searchReducer} = useSelector((store) => store );
  const {genres} = useSelector((store) => store.genres );

  return (
  <div style={{display:'flex', justifyContent:'space-between', alignContent:'center'}}>
    <h5 style={{marginTop:'17px', marginRight:'120px', fontWeight:600}}>YOURS TO DISCOVER. EXPLORE NOW</h5>
    
    <Search movies={searchReducer} genres={genres}/>
  </div>
  
)};

export default SearchMovies