import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filters, data } from "./data";
import { useState, useEffect } from "react";

function App() {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [filterCards, setFilterCards] = useState([]);

  useEffect(() => {
    clickHandler();
    extractObj();
  }, []);

  function extractObj() {
    setIsDataLoading(true);
    setTimeout(() => {
      const arr = [];
      Object.values(data.data).forEach((array) => {
        array.forEach((obj) => {
          arr.push(obj);
        });
        setFilterCards(arr);
      });
    }, 100);
    setIsDataLoading(false);
  }

  function clickHandler(category) {
    // console.log(category);
    setIsDataLoading(true);
    setTimeout(() => {
      if (category === "all") {
        const allCards = Object.values(data.data).flat();
        setFilterCards(allCards);
      } else if (Object.keys(data.data).includes(category)) {
        // console.log(data.data[category]) gives array of objects
        setFilterCards(data.data[category]);
      }
    }, 100);
    setIsDataLoading(false);
  }
  // console.log(filterCards);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Filter filters={filters} clickHandler={clickHandler}></Filter>
      <Cards
        data={data}
        filterCards={filterCards}
        isDataLoading={isDataLoading}
      ></Cards>
    </div>
  );
}

export default App;
