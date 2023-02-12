import './App.css';
import Header from './component/Header';
import Movie from './component/Movie';
import movies from './movie.json'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {
          movies.map((element)=>{
            return(
            <Movie key={element.imdbID} title={element.Title} year={element.Year} image={element.Poster} />
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
