import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import Inicio from '../pages/Inicio';
import Cursos from '../pages/Cursos';
import Carreras from '../pages/Carreras';
import Tutorias from '../pages/Tutorias';

const MainRoutes = () => {
  return (
    <>
      <NavBarComponent cartCount={0} />
      <Routes>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/cursos" component={Cursos} />
        <Route exact path="/carreras" component={Carreras} />
        <Route exact path="/tutorias" component={Tutorias} />
      </Routes>
    </>
  );
};

export default MainRoutes;