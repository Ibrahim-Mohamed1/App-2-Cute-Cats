import React, { Component } from 'react';
import "./App.css"
import { withData } from './DataProvider';

class App extends Component {

  render() {
    const styles={
      cat:{
        width: "90%",
        display:"block",
        margin:"auto"
      },
      button:{
        display: "block",
        margin: "auto",
        marginTop:"1em",
        padding: 10
      }
    }
    return (
      <div>
        <button style={styles.button} onClick={() => this.props.getCat()}>Click me</button>
        <br/>
        <img style={styles.cat} src={this.props.cat} alt=""/>
      </div>
    );
  }
}

export default withData(App);