import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/cursos" element={<Cursos />} />
        <Route exact path="/carreras" element={<Carreras />} />
        <Route exact path="/tutorias" element={<Tutorias />} />
      </Routes>
    </>
  );
};

export default MainRoutes;