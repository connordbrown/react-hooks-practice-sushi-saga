import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setSushiList(data))
  }, [])

  function handleSushiEaten(sushiPrice) {
      setMoney(money - sushiPrice);
    }
  
  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} money={money} onSushiEaten={handleSushiEaten}/>
      <Table money={money}/>
    </div>
  );
}

export default App;
