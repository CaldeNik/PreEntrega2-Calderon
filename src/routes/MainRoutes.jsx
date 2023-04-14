import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { NavBarComponent } from "../components";
import { Inicio, Cursos, ProductDetail, Cart, Carreras } from "../pages";

export const MainRoutes = () => {

    return (
        <Router>
            <NavBarComponent />
            <Routes>
                <Route exact path="/" element={<Inicio />}/>
                <Route exact path="/:categoryId" element={<Cursos />}/>
                <Route exact path="/products/:productId" element={<ProductDetail />}/>
                <Route exact path="/:categoryID" element={<Carreras />}/>
                <Route exact path="/cart" element={<Cart />}/>
            </Routes>
        </Router>
    )
};
