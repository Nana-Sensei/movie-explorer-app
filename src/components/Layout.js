import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../Images/elix-01.png';
import { styled } from '@mui/system';
import SearchMovies from '../Container/SearchMovies';


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const Img = styled("img")({
  marginLeft: "0px",
  marginRight: "auto",
  display: "block",
  width: 200,
  maxWidth: "100%",
});

const LayoutWrapper = styled('div')(({ theme }) => ({
  margin: 0,
  paddingTop:'25px',
  width: "auto",
  [theme.breakpoints.up("lg")]: {
    marginLeft: "auto",
    marginRight: "auto",
    width: theme.breakpoints.values.lg
  }
}))

const Layout = ({ children }) => {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <LayoutWrapper >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignContent:'center'}}>
            <Link to="/">
              <Img src={logo} alt="TMDB" />
            </Link>
            <SearchMovies />
          </div>
          {children}
        </LayoutWrapper>
      </ThemeProvider>
    </>
  );
}

export default Layout