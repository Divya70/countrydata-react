import { useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];
  return (
    <>
      <h1>Country List</h1>
      <select onChange={(e) => setCountry(e.target.value)} value={country}>
        {countries.map((countryList, index) => {
          return (
            <option key={index} value={index}>
              {countryList.name}
            </option>
          );
        })}
      </select>
      {/* second dropdown */}
      <select>
        {
          countries[country]?.cities?.map((cityItem , index)=>{
            return(
              <option value={index} key={index}>{cityItem}</option>
            )
          })
        }
      </select>
    </>
  );
}

export default App;
