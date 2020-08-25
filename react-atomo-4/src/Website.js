import React from 'react';
import NavBar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer'

function Website() {
  return (
    <div className="container-fluid">
      <NavBar />
      <Content />
      <Footer />
    </div>
    );
}

export default Website;
