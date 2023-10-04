import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = 'http://localhost:8000'
const CitiesContext = createContext();

function CitiesProvider ({children}) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

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

  const getCity = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      console.error(err.message)
    } finally {
      setIsLoading(false);
    }
  }

  const pack = {
    cities,
    isLoading,
    currentCity,
    getCity
  }

  return <CitiesContext.Provider value={pack}>{children}</CitiesContext.Provider>
}

function useCities () {
  return useContext(CitiesContext);
}

export { CitiesProvider, useCities };