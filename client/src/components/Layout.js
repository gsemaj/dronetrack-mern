import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <div className="container-fluid">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
