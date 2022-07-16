import { useState, createContext, useEffect } from "react";
import UserRoute from './routes';
import { Country, State, City }  from 'country-state-city';

function App() {

  const UserContext = createContext('');
  const [country, setCountry] = useState([]);
  useEffect(()=> {
    setCountry(Country.getAllCountries());
  }, []);

  const [degree, setDegree] = useState([
    { name: 'BA', id: 1},
    { name: 'MA', id: 2},
  ]);
  //institiue state
  const [institute, setInstitute] = useState([
    { name: 'PU', id: 11},
    { name: 'PAU', id: 22},
  ]);
  

  return (
    <div className="App">
      <UserContext.Provider value={country}>
        <UserRoute/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
