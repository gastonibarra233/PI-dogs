import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../../images/backgroundDog.jpg'
import styles from './LandingPage.css'

function LandingPage() {
  return (
    <div
      className="landing-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}>
      <h1>Landing Page</h1>
      <p>¡Bienvenidos a mi aplicación!</p>
      <Link to="/home">
        <button className={styles.button}>Ir a la página principal</button>
      </Link>
    </div>
  );
}

export default LandingPage;
