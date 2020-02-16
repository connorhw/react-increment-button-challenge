import React from 'react';
import IncrementButton from './increment-button';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

setCount = (count) => {
    this.setState({count});
}

componentDidMount() {
    this.setCount(this.state.count);
}
incrementCount = () => {
    let newCount = this.state.count+1;
    this.setCount(newCount)
    console.log('incrementCount is working in App js')
}
    render() {
        
        return (
            <div className="parent">
                <div className="count">
                    Number of clicks: {this.state.count}
                </div>
                <IncrementButton addOne={this.incrementCount}/>
            </div>
        );
    }
}
