
import './App.css';
import { Nav } from './components/Nav';
import Juego from './components/Juego';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Juego />
      <Footer />
    </div>
  );
}

export default App;
