import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  );
};

const mapState = (state) => ({
  auth: state.auth,
});

export default connect(mapState)(Home);
