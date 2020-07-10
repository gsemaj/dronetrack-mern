import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <div className="custom-wrapper">
      <Navbar />
      {props.children}
      <Footer />

      <style jsx="true">{`
        .custom-wrapper {
          overflow-x: hidden;
        }
        `}
      </style>
    </div>
  );
}
