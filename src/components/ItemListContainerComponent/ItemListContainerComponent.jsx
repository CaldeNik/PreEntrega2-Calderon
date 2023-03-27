import React, { useState, useEffect } from "react";
import styles from './ItemListContainer.module.css'
import ItemDetailComponent from '../ItemDetailComponent/ItemDetailComponent';
import products from '../../json/products.json';

const getProducts = (category) => {
  return new Promise((resolve, reject) => {
    // Aquí puedes llamar a una API o leer datos de un archivo
    const data = [
      {
        "id": 1,
        "name": "Curso de React",
        "category": "cursos",
        "description": "Aprende a desarrollar aplicaciones web con React",
        "image": "https://sigdeletras.com/images/blog/202004_react_leaflet/react.png",
        "price": 99.99
      },
      {
        "id": 2,
        "name": "Carrera de Desarrollo Web",
        "category": "carreras",
        "description": "Conviértete en un desarrollador web full stack",
        "image": "https://www.comunicare.es/wp-content/uploads/2021/11/desarrollo-web-3.jpg",
        "price": 499.99
      },
      {
        "id": 3,
        "name": "Tutoría de JavaScript",
        "category": "tutorias",
        "description": "Recibe tutoría personalizada para mejorar tus habilidades en JavaScript",
        "image": "https://talentfit.mx/wp-content/uploads/2020/11/mentoring_en_organizaciones.png",
        "price": 49.99
      },
    ];
    if (category) {
      const filteredProducts = data.filter(
        (product) => product.category === category
      );
      resolve(filteredProducts);
    } else {
      resolve(data);
    }
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
