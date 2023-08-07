import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  results: [],
  totalResults: 0,
  totalPages: 0,
  isFetching: false
}

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    searchMovies: (state) => {
      return {
        ...state,
        isFetching: true 
      };
    },
    fetchedSearchMovies: (state, action) => {
      return {
        ...state,
        isFetching: false,
        results: action.payload.results,
        totalResults: action.payload.total_results,
        page: action.payload.page,
        totalPages: action.payload.total_pages
      };
    },

    resetState: (state)=>{
      return initialState;
    }

  },
})

// Action creators are generated for each case reducer function
export const {searchMovies, fetchedSearchMovies, resetState } = searchSlice.actions

export default searchSlice.reducer;