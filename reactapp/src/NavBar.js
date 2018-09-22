
import React, { Component } from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';


export default class Test extends Component {
    state = {
        value: '美食',
      };
      render() {
        return (<div className="NavBg">
         
          <WingBlank><div className="sub-title">哈尔滨</div></WingBlank>
      <SearchBar className="searchbar"
        value={this.state.value}/>
        </div>);
      }
}