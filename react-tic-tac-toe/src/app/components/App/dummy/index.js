import React from 'react';
import { connect } from 'react-redux';

class Dummy extends React.Component {
  render() {
    return <div>This page is empty :)</div>;
  }
}

export default connect()(Dummy);
