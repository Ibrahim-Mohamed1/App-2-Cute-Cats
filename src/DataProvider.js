import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor(){
        super()
        this.state={
            joke: ''
        }
    }

    componentDidMount(){
        this.getJoke()
    }

    getJoke = () => {
        axios.get(`https://icanhazdadjoke.com/slack`).then(res => {
            this.setState({
                joke: res.data.attachments[0].fallback
            })
        })
    }

    render() {
        return (
            <Provider value={{
                getJoke: this.getJoke,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}