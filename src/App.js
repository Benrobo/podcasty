import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';

import './index.css';
import Home from './pages/Home';
import Playlist from './pages/Playlist/Playlist';

// create storage
let table = {
  playlist: [],
  recent: []
}
localStorage.setItem("Podcasty", JSON.stringify(table))


function App() {
  return (
    <div className="main-cont">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/resent" element={<} /> */}
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
