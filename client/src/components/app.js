import React from 'react';
import Header from './common/header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header/>
    );
  }
}