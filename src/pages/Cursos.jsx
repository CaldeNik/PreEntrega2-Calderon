import React, { useState, useEffect } from 'react';
/* import { Card } from 'react-bootstrap'; */
import { Card } from '../components';
import { useParams } from 'react-router-dom';
import { ProductsData } from '../json';


export const Cursos = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosFiltrados = ProductsData.filter(producto => producto.categoria === categoryId);
    setProductos(productosFiltrados);
  }, [categoryId]);

  return (
    <div className='productos'>
      {productos.map(producto => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};


