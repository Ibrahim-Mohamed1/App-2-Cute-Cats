import React, { Component } from 'react';
import "./App.css"
import { withData } from './DataProvider';

class App extends Component {

  render() {
    const styles={
      joke:{
        width: "90%",
        display:"block",
        margin:"auto",
        color:"white",
        textAlign:"center"
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
        <button style={styles.button} onClick={() => this.props.getJoke()}>Next</button>
        <br/>
        <h1 style={styles.joke}>{this.props.joke}</h1>
      </div>
    );
  }
}

export default withData(App);