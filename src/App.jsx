import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/pages/Home/Home'
import FakeShop from './components/pages/FakeShop/FakeShop'
import ProductDetails from './components/pages/ProductDetails/ProductDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<FakeShop/>}/>
      <Route path='/shop/:id' element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

export default App
