import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};


const NavBar = () => {

    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <div className={styles.divTitle}>
                <img src={logo} className={styles.logo} alt='logo' onClick={() => navigate('/')}/>
                {/* <h1 className={styles.h1}>Morumbi Multimarcas</h1> */}
            </div>
            <nav className={styles.nav}>
                <button className={styles.button} onClick={() => scrollToSection('home')}>Página inicial</button>
                <button className={styles.button} onClick={() => scrollToSection('nossosServiços')}>Nossos Serviços</button>
                <button className={styles.button} onClick={() => scrollToSection('localizacao')}>Localização</button>
                <button className={styles.button} onClick={() => scrollToSection('formulario')}>Contato</button>
            </nav>                
        </header>
    );
};

export default NavBar;