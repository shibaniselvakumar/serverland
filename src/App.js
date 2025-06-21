import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServerMap from './pages/ServerMap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servermap" element={<ServerMap />} />
      </Routes>
    </Router>
  );
}

export default App;
