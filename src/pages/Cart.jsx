import React, { useContext } from "react";
import { CartContext } from "../context";
import { BuyButton } from "../components";

export const Cart = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <div>
      {itemCount.qtyItems === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div>
          <h2>Carrito de Compras</h2>
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

