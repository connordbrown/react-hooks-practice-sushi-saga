import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js";

function SushiContainer({sushiList, money, onSushiEaten}) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [eatenIdList, setEatenIdList] = useState([]);

  function handleMoreSushi() {
    if (end > sushiList.length - 4) {
      setStart(0);
      setEnd(4);
    } else {
      setStart(start + 4);
      setEnd(end + 4);
    }
  }

  const sushiItems = sushiList.map(sushi => {
    return <Sushi key={sushi.id}
                  id={sushi.id}
                  name={sushi.name}
                  img_url={sushi.img_url}
                  price={sushi.price}
                  money={money}
                  onSushiEaten={onSushiEaten}
                  eatenIdList={eatenIdList}
                  setEatenIdList={setEatenIdList}
    />
  })

  return (
    <div className="belt">
      {sushiItems.slice(start, end)}
      <MoreButton onMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
