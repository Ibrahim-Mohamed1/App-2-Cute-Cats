import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor(){
        super()
        this.state={
            cat: []
        }
    }

    componentDidMount(){
        this.getCat()
    }

    getCat = () => {
        axios.get(`https://api.thecatapi.com/v1/images/search`, { headers: { "api_-key": `${process.env.REACT_APP_KEY}` } }).then(res => {
            this.setState({
                cat: res.data[0].url
            })
        })
    }

    render() {
        return (
            <Provider value={{
                getCat: this.getCat,
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