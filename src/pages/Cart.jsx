import React, { useContext } from "react";
import { CartContext } from "../context";
import { BuyButton } from "../components";

export const Cart = () => {
  const { itemCount } = useContext(CartContext);

  const cartStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
    fontFamily: "montserrat",
  };

  return (
    <div style={cartStyles}>
      {itemCount.qtyItems === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div>
          <h2>Finalice su compras</h2>
          <ul>
            {itemCount.products.map((product) => (
              <li key={product.productId}>
                <p>Producto: {product.productId}</p>
                <p>Cantidad: {product.qty}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <BuyButton />
    </div>
  );
};

