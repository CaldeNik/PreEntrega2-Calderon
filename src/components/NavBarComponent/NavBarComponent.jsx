import React from 'react';
import styles from './NavBarComponent.module.css'
import { Link } from 'react-router-dom';

const NavBarComponent = ({ cartCount }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__brand}>
        <Link to="/">
          <img src="https://www.favicon.cc/logo3d/709515.png" alt="My E-commerce App" />
        </Link>
      </div>
      <ul className={styles.navbar__menu}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/cursos">Cursos</Link>
        </li>
        <li>
          <Link to="/carreras">Carreras</Link>
        </li>
        <li>
          <Link to="/tutorias">Tutorías</Link>
        </li>
      </ul>
      <div className={styles.navbar__cart}>
        <Link to="/cart">
          <i className="fa fa-shopping-cart navbar__cart-icon"></i>
          <span className={styles['navbar__cart-count']}>{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBarComponent;
