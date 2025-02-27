import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Home/Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <button 
                className={styles.menuButton} 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="메뉴 열기"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={styles.logo}>
                <img src="/images/Logo/logo.png" alt="App & Me Logo" />
            </div>

            <nav className={styles.nav}>
                <ul className={menuOpen ? styles.active : ""}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/AboutUs" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                    <li><Link to="/Prize" onClick={() => setMenuOpen(false)}>Prize</Link></li>
                    <li><Link to="/JoinUs" onClick={() => setMenuOpen(false)}>Join Us</Link></li>
                    <li><Link to="/QnA" onClick={() => setMenuOpen(false)}>Q&A</Link></li>
                </ul>
            </nav>

            <div className={styles.applyButton}>
                <button>지원하기</button>
            </div>
        </header>
    );
}
