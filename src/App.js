import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Main, Footer, ProductItem, PageNotFound } from './components'
import listProducts from './utils/data'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Main />} />
        {listProducts.map((data) => (
          <Route key={data.slug} path={data.slug} exact element={<ProductItem />} />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
