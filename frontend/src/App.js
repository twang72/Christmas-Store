import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeSceen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Christmas Store</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/product/:slug" element={<ProductScreen />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
