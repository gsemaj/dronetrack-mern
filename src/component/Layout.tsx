import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => (
    <div className="container-fluid">
      <Head>
        <title>DroneTrack</title>
        // Fetch Bootstrap from CDN
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
      </Head>
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <div className="container-fluid">
          {props.children}
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
);

export default Layout;
