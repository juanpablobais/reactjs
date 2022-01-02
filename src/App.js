import './App.css';
import NavMenu from './component/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer';
import ItemList from './component/Cart/ItemList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <header className="App-header">
        <Container fluid className= 'mx-auto justify-content-center'>
          <ItemListContainer usuario='Juan'/>
           <ItemList/>
        </Container>
       
      </header>
    </div>
  );
}

export default App;