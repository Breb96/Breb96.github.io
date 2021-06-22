import React, { Component } from 'react';
import './Faq.css';
import axios from 'axios';

class Faq extends Component {

    constructor(props) {
        super(props);

        this.state = {
            faqs: []
        };
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const faqs = res.data.slice(0,10);
                this.setState({ faqs });
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                <section className="section">
                    <h1 className="title">FAQ</h1>
                    <h2 className="subtitle is-4">Lorum ipsum and all of that jazz.</h2>

                    
                    <div className="columns">
                        {this.state.faqs.map(faq =>
                            <div className="column is-one-third">
                                <div className="card">
                                <div className="card-content">
                                    <p className="title">{ faq.title }</p>
                                    <p className="answer">{ faq.body }</p>
                                </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
        );
    }
}

export default Faq;