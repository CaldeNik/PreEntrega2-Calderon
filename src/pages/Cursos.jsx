import React, { useState, useEffect } from 'react';
import { Card } from '../components';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


export const Cursos = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
    const productosRef = collection(db, 'products');
    const q = query(productosRef, where('categoria', '==', categoryId));
    
    const obtenerProductos = async () => {
      const querySnapshot = await getDocs(q);
      const productos = [];
      querySnapshot.forEach((doc) => {
        productos.push({ id: doc.id, ...doc.data() });
      });
      setProductos(productos);
    };

    obtenerProductos();
  }, [categoryId]);

  return (
    <div className='productos'>
      {productos.map(producto => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};


