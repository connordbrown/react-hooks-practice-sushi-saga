import React, { useState, useEffect } from "react";

function Sushi({id, name, img_url, price, money, onSushiEaten, eatenIdList, setEatenIdList}) {
  const [isEaten, setIsEaten] = useState(false);

  useEffect(() => {
    if (eatenIdList.includes(id)) {
      setIsEaten(true);
    }
  }, [])

  function handleSushiClick(id) {
    if (money - price >= 0) {
      setIsEaten(true);
      onSushiEaten(price);
      setEatenIdList([...eatenIdList, id]);
    } else {
        return;
      }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleSushiClick(id)}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
