import React,  {Component} from 'react';
import {Container} from 'react-bootstrap';

import MusicProfile from './components/MusicProfile/MusicProfile'


class App extends Component {
  render() {


    return (
      <Container fluid style = {{paddingLeft : '0',paddingRight: '0', height : '100%', width : '100%'}}>
        <MusicProfile />
      </Container>
    );
  }
}

export default App;
