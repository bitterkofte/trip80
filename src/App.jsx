import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import PricingPage from './pages/PricingPage'
import LoginPage from './pages/LoginPage'
import AppPage from './pages/AppPage'
import NotFoundPage from './pages/NotFoundPage'
// import PageNav from "./components/PageNav"

const App = () => {
  return (
    <div className=''>
    
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<PageNav />}> */}
            <Route index element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="login" element={<LoginPage />} />

            <Route path="app" element={<AppPage />}>
              <Route index element={<p>list of cities</p>} />
              <Route path="cities" element={<p>list of cities</p>} />
              <Route path="countries" element={<p>countries</p>} />
              <Route path="form" element={<p>form</p>} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App