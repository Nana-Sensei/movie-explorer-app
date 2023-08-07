import Carousel from 'react-bootstrap/Carousel';
import { styled } from '@mui/system';


const CaptionStyled = styled('Carousel.Item')({
  position: 'absolute',
  right: '10%',
  top: '3rem',
  left: '11%',
  marginLeft: '550px',
  paddingTop: '1rem',
  color: '#fff',
  textAlign: 'left',
})


const CarouselStyled = styled(Carousel)(({
  position: 'relative',
  backgroundColor: '#000000',
  padding: '30px',
  paddingBottom: '50px',
  zIndex: 1
}))


function ReactCarousel() {

  return (
    <CarouselStyled style={{ marginBottom: '20px' }}>


      <Carousel.Item style={{ alignContent: 'center' }}>
        <iframe width="650"
          height="450" src="https://www.youtube.com/embed/qEVUtrk8_B4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <CaptionStyled>

          <h1 style={{
            borderLeft: 'solid #00d3be',
            borderRightWidth: 'bold',
            paddingLeft: '15px',
          }}
            className="movie-title" >John Wick: Chapter 4</h1>
          <p className="movie-blurb">
            John Wick (Keanu Reeves) uncovers a path to defeating the High Table.
            But before he can earn his freedom, Wick must face off against a new
            enemy with powerful alliances across the globe and forces that turn
            old friends into foes.
            <br />
            <br />
            <small style={{ color: 'gray' }}>
              Keanu Reeves, Ian McShane, Lance Reddick, Scott Adkins, Donnie Yen, Bill Skarsgard
            </small>
          </p>
          <span style={{ color: ' #00d3be' }}>Action &#183; Neo-Noir &#183; Crime &#183; Mystery</span>

        </CaptionStyled>
      </Carousel.Item>


      <Carousel.Item style={{ alignContent: 'center' }}>
        <iframe width="650"
          height="450" src="https://www.youtube.com/embed/r51cYVZWKdY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <CaptionStyled>

          <h1 style={{
            borderLeft: 'solid #00d3be',
            borderRightWidth: 'bold',
            paddingLeft: '15px',
          }}
            className="movie-title" >The Flash</h1>
          <p className="movie-blurb justify-content-around">
            Worlds collide in “The Flash” when Barry uses his superpowers
            to travel back in time in order to change the events of the past.
            But when his attempt to save his family inadvertently alters the future,
            Barry becomes trapped in a reality in which General Zod has returned,
            threatening annihilation.
            <br />
            <br />
            <small style={{ color: ' gray' }}>
              Ezra Miller, Ben Affleck, Michael Keaton, Sasha Calle, Michael Shanon,
              Kiersey Clemons, Maribel Verdu </small>
          </p>
          <span style={{ color: ' #00d3be' }}>Action &#183; Superhero &#183; Sci-Fi</span>

        </CaptionStyled>
      </Carousel.Item>


      <Carousel.Item style={{ alignContent: 'center' }}>
        <iframe width="650"
          height="450" src="https://www.youtube.com/embed/o5F8MOz_IDw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <CaptionStyled>

          <h1 style={{
            borderLeft: 'solid #00d3be',
            borderRightWidth: 'bold',
            paddingLeft: '15px',
            // marginTop:'40px'
          }}
            className="movie-title" >Avatar: The Way of Water</h1>
          <p className="movie-blurb justify-content-around" >
            “Avatar: The Way of Water” begins to tell the story of the
            Sully family (Jake, Neytiri, and their kids), the trouble that
            follows them, the lengths they go to keep each other safe, the battles
            they fight to stay alive, and the tragedies they endure.
            <br />
            <br />
            <small style={{ color: 'gray' }}>
              Sam Worthington, Zoe Saldana, Sigourney Weaver, Kate Winslet, Stephen Lang,
              Michelle Yeoh, Cliff Curtis, Britain Dalton
            </small>
          </p>
          <small style={{ color: ' #00d3be' }}> Adventure &#183; Action &#183; Sci-Fi &#183; Fantasy</small>

        </CaptionStyled>
      </Carousel.Item>


      <Carousel.Item style={{ alignContent: 'center' }}>
        <iframe width="650"
          height="450" src="https://www.youtube.com/embed/pBk4NYhWNMM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <CaptionStyled>

          <h1 style={{
            borderLeft: 'solid #00d3be',
            borderRightWidth: 'bold',
            paddingLeft: '15px',
            // marginTop:'40px'
          }}
            className="movie-title" >Barbie</h1>
          <p className="movie-blurb justify-content-around">
            Barbie and Ken are having the time of their lives in the colorful
            and seemingly perfect world of Barbie Land. However, when they get a
            chance to go to the real world, they soon discover the joys and perils
            of living among humans.
            <br />
            <br />
            <small style={{ color: ' gray' }}>
              Margot Robbie, Ryan Gosling, Will Ferrell, Emma Mackey, Simu Liu,
              Michael Cera, Kate McKinnon, America Ferrera
            </small>
          </p>
          <span style={{ color: ' #00d3be' }}>Fantasy &#183; Romance &#183; Adventure</span>

        </CaptionStyled>
      </Carousel.Item>


      <Carousel.Item style={{ alignContent: 'center' }}>
        <iframe width="650"
          height="450" src="https://www.youtube.com/embed/uYPbbksJxIg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <CaptionStyled>

          <h1 style={{
            borderLeft: 'solid #00d3be',
            borderRightWidth: 'bold',
            paddingLeft: '15px',
            // marginTop:'40px'
          }}
            className="movie-title" >Oppenheimer</h1>
          <p className="movie-blurb justify-content-around">
            Written and directed by Christopher Nolan, Oppenheimer is an IMAX®-shot epic thriller
            that thrusts audiences into the pulse-pounding paradox of the enigmatic man who must
            risk destroying the world in order to save it.
            <br />
            <br />

            <small style={{ color: ' gray' }}>
              Cillian Murphy, Emily Blunt, Matt Damon and Robert Downey Jr.
            </small>
          </p>
          <small style={{ color: ' #00d3be' }}> Adventure &#183; Action &#183; Sci-Fi &#183; Fantasy</small>

        </CaptionStyled>
      </Carousel.Item>


      <Carousel.Item style={{ alignContent: 'center' }}>
        <iframe width="650"
          height="450" src="https://www.youtube.com/embed/shW9i6k8cB0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <CaptionStyled>

          <h1 style={{
            borderLeft: 'solid #00d3be',
            borderRightWidth: 'bold',
            paddingLeft: '15px',
          }}
            className="movie-title" >Spiderman: Across the Spiderverse</h1>
          <p className="movie-blurb justify-content-around">
            Miles Morales embarks on a thrilling adventure through the multiverse
            and joins forces with Gwen Stacy and Spider-People to fight a supervillain.
            <br />
            <br />
            <small style={{ color: ' gray' }}>
              Shameik Moore, Hailee Steinfield, Jake Johnson, Daniel Kaluya, Oscar Isaac
            </small>
          </p>
          <small style={{ color: ' #00d3be' }}>Superhero &#183; Action &#183; Comedy &#183; Animation</small>

        </CaptionStyled>
      </Carousel.Item>








    </CarouselStyled >
  );
}

export default ReactCarousel;