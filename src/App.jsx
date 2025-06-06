import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import VideoGames from './pages/Videogames';

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/videogames" element={<VideoGames />} />
          <Route path="/videogames/:id" element={<VideoGames />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;