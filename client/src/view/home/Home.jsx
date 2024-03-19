import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import './Nav.css'
import logo from '../../images/logo-navbar-izq.png'
import Card from '../Card/Card'
import Select from "../select/Select";
import getDog from "../../helpers/getDog"


const initialDog = {
  image:
    "https://images.ecestaticos.com/pSGD7UPcsEzyFzmiyg8jcBomWQs=/0x110:2120x1302/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F721%2F122%2F714%2F72112271431cb1078c3fe3e75ad5ab41.jpg",
  breed: {
    id: 1,
    name: "Golden",
  },
};

function Home() {

  const [dog, setDog] = useState(initialDog);

  useEffect(() => {
    updateDog();
  }, [])

  const updateDog = () => {
    getDog()
      .then((newDog) => {
        setDog(newDog)
    })
  }
  
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
            <button className="button">
              <span>Breeds</span>
            </button>
          </Link>
        </div>
        <div className="navbar-middle">
          <input
            type="text"
            placeholder="Search by breeds..."
            className="search-input"
          />
          <button className="nav-button">Search</button>
          <Select />
        </div>
        <div className="navbar-right">
          <button className="nav-button">Create my dog</button>
          <Link to="/">
            <button className="nav-button">Landing Page</button>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="left-section">
          <h2>Dog Breeds</h2>
        </div>
        <div className="middle-section">
          <h2>Select source:</h2>
          <div className="source-buttons">
            <label className="radio-container">
              All
              <input type="radio" name="source" value="all" />
              <span className="checkmark"></span>
            </label>
            <label className="radio-container">
              API
              <input type="radio" name="source" value="api" />
              <span className="checkmark"></span>
            </label>
            <label className="radio-container">
              YOURS
              <input type="radio" name="source" value="yours" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <div className="right-section">
          <button className="filter-btn alphabetic">
            <span>Alphabetic</span>
            <span className="icon">&#9660;</span>
          </button>
          <button className="filter-btn weight">
            <span>Weight</span>
            <span className="icon">&#9660;</span>
          </button>
        </div>
      </div>
      <div className="card-container">
        <Card dog={dog} />
      </div>
    </div>
  );
}

export default Home;
