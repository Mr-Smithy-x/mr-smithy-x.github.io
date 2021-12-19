import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'

export class Home extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {


        return (
            <div data-w-id="3fd5aeb3-22da-ed60-7286-0d11f16597d3" style={{opacity:50}} className="content">
                <div className="name">Charlton Smith</div>
                <h1 className="tagline"><strong className="bold-text">Developer. Hacker. Linguist.</strong></h1>
                <p className="bio">
                    Just another minority pushing boundaries
                </p>
                <div className="links w-row">
                    <div className="column w-col w-col-4">
                        <div className="text-block-2">Connect</div>
                        <ul role="list" className="list w-list-unstyled">
                            <li>
                                <a href="https://charltonsmith.nyc">Website</a>
                            </li>
                        </ul>
                    </div>
                    <div className="column-2 w-col w-col-4">
                        <div className="text-block-2">Codes</div>
                        <ul role="list" className="list w-list-unstyled">
                            <li>
                                <a href="https://github.com/Mr-Smithy-x">Github</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-col w-col-4">
                        <div className="text-block-2">network</div>
                        <ul role="list" className="list w-list-unstyled">
                            <li>
                                <a href="#">Link One</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="credit">©2020 Your Name - <a href="https://onepagelove.com/split" target="_blank"
                                                             className="credit-links">Split Template</a> by <a
                    href="https://onepagelove.com" target="_blank" className="credit-links">One Page Love</a>
                </div>
            </div>

        );
    }
}

export default Home;