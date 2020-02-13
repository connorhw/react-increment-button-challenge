import React from 'react';
import IncrementButton from './increment-button';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
setCount(count) {
    this.setState({count});
}

componentDidMount() {
    this.setCount(this.state.count);
    console.log(this.state.count)
}

incrementCount = count => {
    const newCount = count + 1
    this.setState({
        count: newCount
    })
}

    render(incrementCount) {
        //console.log(incrementCount);
        //console.log(this.state.count);
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
