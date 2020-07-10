import React from 'react';

export default function Footer() {
  return (
      <div className="row custom-footer align-middle py-2">
        <div className="col" />
        <div className="col text-center">
          <a href="https://github.com/gsemaj/dronetrack-mern">
            <img src="/github_logo.png" alt="GitHub"/>
          </a>
          <br />Gent Semaj. Licensed under GPL 3.0.
        </div>
        <div className="col" />

        <style jsx="true">{`
          .custom-footer {
            background-color: white;
            border: 2px solid light-grey;
          }
          `}
        </style>
      </div>
  );
}
