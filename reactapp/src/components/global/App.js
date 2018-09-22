import React, { Component } from 'react';
import './../../assets/css/App.css';
import Test from '../../Test'
import NavBar from '../../NavBar'
import { Carousel, WingBlank } from 'antd-mobile';
// import img from './../../assets/img/dianying.png'

class App extends Component {

  render() {
    let img = "dianying";
    return (
      <div className="App">
      <NavBar/>

        <img src={require(`./../../assets/img/${img}.png`)} alt=""/>
        {/* <header className="App-header">
        </header>
        <p className="App-intro">
        </p> */}
        <Test/>
      </div>
    );
  }
}

export default App;
