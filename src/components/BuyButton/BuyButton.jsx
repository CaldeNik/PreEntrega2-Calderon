import React, { useState } from "react";
import styles from "./Buybutton.module.css"
export const BuyButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      {!isClicked ? (
        <button className={styles.button} onClick={handleClick}>Comprar</button>
      ) : (
        <div style={{ border: "5px solid blue", borderRadius: "8px", padding: "10px", fontWeight: "bold", color: "blue" }}>
          <p>¡Compra realizada con éxito!</p>
        </div>
      )}
    </div>
  );
};

