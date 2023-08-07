import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './Container/MovieDetails';
import Layout from './components/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGenres } from './Redux/genres';
import PopMovs from './Container/PopMovs';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);


  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route className='pop-movies' path="/" element={<PopMovs/>}> </Route>
            <Route path="/movie/:id" element={<MovieDetails />}> </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
