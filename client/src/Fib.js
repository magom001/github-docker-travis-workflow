import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
    state = {
        seenIndices: [],
        values: {},
        index: ''
    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndices();
        axios.get('/api/', (response) => {
            console.log(response);
        })
    }

    async fetchValues() {
        const values = await axios.get('/api/values/current');
        this.setState({
            values: values.data
        });
    }

    async fetchIndices() {
        const seenIndices = await axios.get('/api/values/all');
        this.setState({
            seenIndices: seenIndices.data
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post('/api/values', {
            index: this.state.index
        });

        console.log(response);

        this.setState({index: ''});
    }

    renderSeenIndices() {
        return this.state.seenIndices.map(({ number }) => number).join(', ');
    }

    renderValues() {
        return Object.keys(this.state.values).map(index => (
            <div key={index}>
                For index {index} I calculated {this.state.values[index]}
            </div>
        ));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter you index:</label>
                    <input
                        value={this.state.index}
                        onChange={event => this.setState({index: event.target.value})}
                    />
                    <button>Submit</button>
                </form>

                <h3>Indices I have seen:</h3>
                {this.renderSeenIndices()}

                <h3>Calculated values:</h3>
                {this.renderValues()}
            </React.Fragment>
        )
    }
}

export default Fib;