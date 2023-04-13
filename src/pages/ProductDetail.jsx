import React from "react";
import { useParams } from "react-router-dom";
import { CartButtons } from "../components";
import { doc, getDoc, getFirestore} from 'firebase/firestore';
import { Loader } from "../components";


export const ProductDetail = () => {
  const { productId } = useParams();
  const [productData, setProductData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {

    const db = getFirestore();
    const docRef = doc(db, "products", productId);
    getDoc(docRef)
    .then(product => {
      if(!product.exists()) {
        console.loge("no existe el producto")
      }
      setProductData({id: product.id, ...product.data()})
    })
    .catch(err => console.log(err))
    .then(() => {setLoading(false)})
  }, [])

  if (!productData) {
    return <div>Producto no encontrado</div>;
  }

  return loading ? <Loader /> : (
    <div
      className="detalle-producto"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        {productData.nombre}
      </h1>
      <img
        src={productData.imagen}
        alt={productData.nombre}
        className="img-fluid"
        style={{ maxWidth: "100%", marginBottom: "20px" }}
      />
      <p style={{ marginBottom: "20px" }}>{productData.descripcion}</p>
      <span
        className="precio"
        style={{ fontSize: "20px", fontWeight: "bold", color: "#007bff" }}
      >
        ${productData.precio}
      </span>
      <CartButtons />
    </div>
  );
};
