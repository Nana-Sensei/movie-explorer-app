import React from 'react';
import { TextField, Paper, MenuItem, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../Redux/searchSlice';
import Downshift from 'downshift';
import { Link } from 'react-router-dom';
import { IMAGES_PATH, COVER_PLACEHOLDER } from '../config';
import { mapGenres } from '../Library/helper';



const PaperStyled = styled(Paper)({
  backgroundColor: "",
  maxWidth:"400px",
  position: 'absolute',
  top: 85,
  zIndex: 5,

})


const MenuItemStyled = styled(MenuItem)({
  paddingTop: 10,
  paddingBottom: 10,
})

const ImgStyled = styled('img')({
  height: '100%',
})

const LinkStyled = styled(Link)({
  display: 'block',
  textDecoration: 'none',
  overflow:'clip'
})

const TitleStyled = styled(Typography)({
  fontSize: "14px",
  color: "white",
  paddingTop: 20,
  
})

const CaptionStyled = styled(Typography)({
  fontSize: "12px",
  color: "gray",

})





const Search = ({ movies, genres }) => {

  const dispatch = useDispatch();

  const inputOnSearch = (event) => {
    if (!event.target.value) {
      return;
    }

    dispatch(searchMovies(event.target.value))
  }


const itemToString =()=>"";


  return (
    <Downshift itemToString={itemToString}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => (
        <div>
          <TextField
            style={{width:"400px"}}
            id="search"
            placeholder='Search'
            sx={{ mb: 5 }}
            InputProps={{
              ...getInputProps({
                onChange: inputOnSearch
              })

            }}
          />

          {
            isOpen ?
              (<PaperStyled square={true} {...getMenuProps()}>
                {
                  movies.results
                    .slice(0, 10)
                    .filter((item) =>
                      !inputValue ||
                      item.title
                        .toLowerCase()
                        .includes(inputValue.toLowerCase()))
                    .map((item, index) => (
                      <MenuItemStyled {...getItemProps({
                        item,
                        key: item.id,
                        selected: highlightedIndex === index,
                        style: {
                          fontWeight: selectedItem === item ? 500 : 400
                        }
                      })}>

                        <LinkStyled to={`/movie/${item.id}`}>
                          <Grid container={true} spacing={2}>
                            <Grid item={true}>
                              {item.poster_path ? (
                                <ImgStyled src={`${IMAGES_PATH}/w92${item.poster_path}`} alt={item.title} style={{ width: "50px", height: "65" }} />
                              ) : (
                                <ImgStyled src={COVER_PLACEHOLDER} alt={item.title} />
                              )}
                            </Grid>

                            <Grid item={true} style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                              <TitleStyled variant="h5">
                                {item.title}
                              </TitleStyled>

                              <CaptionStyled variant="caption">
                                {mapGenres(item.genre_ids, genres)}
                              </CaptionStyled>
                            </Grid>

                          </Grid>
                        </LinkStyled>

                      </MenuItemStyled>
                    ))
                }
              </PaperStyled>)
              : null
          }

        </div>
      )}

    </Downshift>
  )
}

export default Search