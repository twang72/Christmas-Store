import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeSceen';
import ProductScreen from './screens/ProductScreen';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <NavBar className="nav-color" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>Christmas Store</NavBar.Brand>
              </LinkContainer>
            </Container>
          </NavBar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />}/>
              <Route path="/product/:slug" element={<ProductScreen />}/>
            </Routes> 
          </Container>
        </main>
        <footer>
          <div className="text-center">
            All rights reserved.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
