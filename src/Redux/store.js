import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice'; 
import watcherSaga from '../sagas';
import genresReducer from './genres';
import moviesReducer from './movies';
import createSagaMiddleware from '@redux-saga/core';
import movieReducer from './movie';



const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    searchReducer, 
    genres: genresReducer,
    movies: moviesReducer,
    movie: movieReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ think: false }).prepend(sagaMiddleware);
  }
 
});

sagaMiddleware.run(watcherSaga);

export default store;

