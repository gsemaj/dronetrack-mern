import React from 'react';
import Layout from '../Layout';
import Lookup from '../Lookup';

export default function Index() {
  return (
    <Layout>
      <div className="row custom-bg justify-content-center">
        <h1 className="display-3 my-5 mx-5">
          Track your packages in real time.
        </h1>
        <Lookup />
      </div>

      <style jsx="true">{`
        .custom-bg {
          background-image: url('/background.png');
          color: white;
        }
        `}
      </style>
    </Layout>
  );
}
