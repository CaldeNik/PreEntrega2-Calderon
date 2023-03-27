import React, { useState, useEffect } from "react";
import styles from './ItemListContainer.module.css'
import ItemDetailComponent from '../ItemDetailComponent/ItemDetailComponent';
import products from '../../json/products.json';

function getProducts(category) {
  return new Promise((resolve, reject) => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        if (category) {
          const filteredProducts = data.filter(
            (product) => product.category === category
          );
          resolve(filteredProducts);
        } else {
          resolve(data);
        }
      })
      .catch((error) => reject(error));
  });
}

const ItemListContainerComponent = ({ category }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(category)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, [category]);

    return (
      <div className={styles['item-list-container']}>
        {products.map((product) => (
          <ItemDetailComponent product={product} key={product.id} />
        ))}
      </div>
    );
};

export default ItemListContainerComponent;
