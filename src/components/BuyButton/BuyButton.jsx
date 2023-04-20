import React, { useState } from "react";

export const BuyButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      {!isClicked ? (
        <button onClick={handleClick}>Comprar</button>
      ) : (
        <div style={{ border: "1px solid black", padding: "10px" }}>
          Compra realizada
        </div>
      )}
    </div>
  );
};

