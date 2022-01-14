import './App.css';
import NavMenu from './component/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/Pages/Home'
import Toys from './component/Pages/Toys'
import Cards from './component/Pages/Cards'

function App() {
  return (
    <div className="App">

    <Router>
      <NavMenu/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Toys" element={<Toys/>}/>
        <Route exact path="/Cards" element={<Cards/>}/>
      </Routes>
    </Router>

      <header className="App-header">
        <Container fluid className= 'mx-auto justify-content-center'>
        </Container>
      </header>
    </div>
  );
}

export default App;