import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/CreateProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/products/:id' element={<ProductDetail></ProductDetail>}/>
        <Route path='/products/new' element={<CreateProduct></CreateProduct>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
