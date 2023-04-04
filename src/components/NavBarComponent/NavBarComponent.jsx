import React, { useContext } from "react";
import NavItem from "./NavItem";
import styles from "./NavComponent.module.css";
import { Link } from "react-router-dom";
import { CartComponent } from "../CartComponent/CartComponent";
import { ThemeContext } from "../../context";
import { Button } from "react-bootstrap";

export const NavBarComponent = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.nav}>
      <header>
      <Link to="/">
          <img  className={styles.navImg} src="https://www.favicon.cc/logo3d/709515.png" alt="My E-commerce App" />
        </Link>
      </header>
      <div className={styles.navItems}>
        <NavItem label="Inicio" src="/" />
        <NavItem label="Cursos" src="/cursos" />
        <NavItem label="Carreras" src="/carreras" />
        <NavItem label="Tutorias" src="/tutorias" />
        <Button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          {isDarkTheme ? "Modo Claro" : "Modo Oscuro"}
        </Button>
        <CartComponent />
      </div>
    </nav>
  );
};
