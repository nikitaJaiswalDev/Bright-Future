import { useState, createContext, useEffect } from "react";
import UserRoute from './routes';
import { Country, State, City }  from 'country-state-city';
export const FormContext = createContext();

function App() {

  const [countries, setCountries] = useState([]);
  useEffect(()=> {
    setCountries(Country.getAllCountries());
  }, []);

  let degrees = [
    { name: 'BA', id: 1},
    { name: 'MA', id: 2},
  ];
  let institutes = [
    { name: 'PU', id: 11},
    { name: 'PAU', id: 22},
  ];
  let organisation = [
    { name: 'BA', id: 1},
    { name: 'MA', id: 2},
  ];
  let designation = [
    { name: 'PU', id: 11},
    { name: 'PAU', id: 22},
  ];
  let currencies = [
    { name: 'PU', id: 11},
    { name: 'PAU', id: 22},
  ];
  
  const [activeStepIndex, setActiveStepIndex] = useState(1);
  const [formData, setFormData] = useState({});

  return (
    <div className="App">
      <FormContext.Provider value={{activeStepIndex, setActiveStepIndex, formData, 
          setFormData, countries,degrees,institutes, organisation, designation,currencies}}>
        <UserRoute/>
      </FormContext.Provider>
    </div>
  );
}

export default App;
