import React, { Component } from 'react';
import '../App.css';
import { Card, CardImg, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="home-header col-12">
                            <div className="row">
                                <div className="col-6 mt-3">
                                    <img src="/assets/images/aic_logo.png" alt="AIC Logo" />
                                </div>
                                <div className="col-6 mt-4 header-item">
                                    <div className="header-item-text">
                                        Co-working Space User App
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Card>
                                <CardImg src="/assets/images/event_space.png" alt="event space image" />
                            </Card>
                            <div className="text-center">
                                <Link to="/apply">
                                    <Button color="primary">Event Space</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-6">
                            <Card>
                                <CardImg src="/assets/images/pod_space.png" alt="podcast space image" />
                            </Card>
                            <div className="text-center">
                                <Link to="/applications">
                                    <Button color="primary">Podcast Space</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>




            </div>


        )
    }
}

export default Home;