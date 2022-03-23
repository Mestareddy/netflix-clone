import "./styles/App.scss";
import { Row, Banner, Navbar } from "./components";
import request from "./requests";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <div>
        <Row
          title='Netflix Originals'
          fetchUrl={request.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title='Trending Now' fetchUrl={request.fetchTrending} />
        <Row title='Top Rated' fetchUrl={request.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={request.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies} />
        <Row title='Horrow Movies' fetchUrl={request.fetchHorrowMovies} />
        <Row title='Romance Movies' fetchUrl={request.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={request.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
