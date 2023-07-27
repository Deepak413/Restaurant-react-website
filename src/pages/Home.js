import React from 'react';
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom';
import homepagebanner from '../images/banner.jpeg';
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${homepagebanner})`}}>
          <div className="headerContainer">
            <h1>Food Mania</h1>
            <p>Best Food In Your Area</p>
            <NavLink to={"/menu"}>
              <button>ORDER NOW</button>
            </NavLink>
          </div>
        </div>
    </Layout>
  )
}

export default Home;