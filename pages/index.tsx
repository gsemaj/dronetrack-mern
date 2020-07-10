import Layout from '../src/component/Layout';
import Lookup from '../src/component/Lookup';

export default function Index() {
  return (
    <Layout>
      <div className="row custom-bg">
        <h1 className="display-3 text-center my-5">
          Track your packages in real time.
        </h1>
        <Lookup />
      </div>

      <style jsx>{`
        .custom-bg {
          justify-content: center;
          background-image: url('/background.png');
          color: white;
        }
        `}</style>
    </Layout>
  );
}
