import React from 'react';
import Layout from '../Layout';
import Lookup from '../Lookup';

export default function Index() {
  return (
    <Layout>
      <div className="custom-bg pb-5">
        <div className="row justify-content-center">
          <h1 className="display-4 my-5 mx-5 text-right">
            Track your packages in real time.
          </h1>
        </div>
        <div className="row justify-content-center">
          <Lookup />
        </div>
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
