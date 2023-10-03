import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import PricingPage from './pages/PricingPage'
import LoginPage from './pages/LoginPage'
import AppPage from './pages/AppPage'
import NotFoundPage from './pages/NotFoundPage'
import CityList from "./components/CityList"
import CountryList from "./components/CountryList"
import { useEffect, useState } from "react"
import City from "./components/City"
import Form from "./components/Form"
// import PageNav from "./components/PageNav"

const BASE_URL = 'http://localhost:8000'

const App = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.error(err.message)
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, [])
  

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
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
              <Route path="cities/:id" element={<City />} />

              <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
              <Route path="form" element={<Form />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App