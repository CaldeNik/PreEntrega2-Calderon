import React from 'react';
import styles from './ItemDetail.module.css';


const ItemDetailComponent = ({ product }) => {
  const { id, image, name, category, description, price } = product;

  const handleAddToCart = () => {
    // Implementar la lógica para agregar el producto al carrito
  };

  return (
    <div className={styles['item-detail-container']}>
      <img className={styles['item-detail-image']} src={image} alt={name} />
      <h2 className={styles['item-detail-name']}>{name}</h2>
      <p className={styles['item-detail-category']}>{category}</p>
      <p className={styles['item-detail-description']}>{description}</p>
      <p className={styles['item-detail-price']}>{`Precio: $${price}`}</p>
      <button className={styles['add-to-cart-button']} onClick={() => handleAddToCart(id)}>Agregar al carrito</button>
</div>
);
};

export default ItemDetailComponent;