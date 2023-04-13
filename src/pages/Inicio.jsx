import React from "react";
import { Card, Loader } from "../components";
import { collection, getDocs, getFirestore} from 'firebase/firestore';

export const Inicio = () => {
  const [productsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const db = getFirestore();

    const itemCollection = collection(db, "products");
    getDocs(itemCollection)
    .then(products => {
      if(products.length === 0){
        console.log("No products")
      }

      setProductsData(
        products.docs.map(doc => ({id: doc.id, ...doc.data() })))
    }).catch(err => console.log(err)).then(() => {
      console.log(productsData);
      setLoading(false);
    })
  }, []);

  if (!loading) {
    console.log(productsData);
  } else {
    console.log("Loading...");
  }

  return loading ? (
    <Loader />
  ) : (
    <div className="productos">
      {productsData.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
