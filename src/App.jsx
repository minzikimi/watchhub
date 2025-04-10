import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopRated from './pages/TopRated';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollBackground from './components/ScrollBackground';

function App() {
  return (
    <Router>
      <ScrollBackground /> 
      <Header />
      <Routes>
        <Route path="/" element={<Popular pathPrefix="popular" />} />
        <Route path="/popular/:showId" element={<Popular pathPrefix="popular" />} />
        <Route path="/nowplaying" element={<NowPlaying pathPrefix="nowplaying" />} />
        <Route path="/nowplaying/:showId" element={<NowPlaying pathPrefix="nowplaying" />} />
        <Route path="/toprated" element={<TopRated pathPrefix="toprated" />} />
        <Route path="/toprated/:showId" element={<TopRated pathPrefix="toprated" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
