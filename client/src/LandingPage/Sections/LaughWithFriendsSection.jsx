import React from 'react'
import Landing_Charts1 from "./Images/Landing_Charts1.png"
import { AiFillStar } from "react-icons/ai"
import { Slide } from "react-awesome-reveal";

function LaughWithFriendsSection() {
    return (
        <section className="LaughWithFriendsSection">
            <div className="container">
                <div className="row">

                    <div className="col">
                        <div className="headline-container">
                            <h1 className="headline headline-3">
                                Laugh with and at your friends..
                            </h1>
                        </div>
                        <div className="tagline-box tagline-box-3">
                            <div className="row">
                                <p className="tagline tagline-3">

                                    Visualize patterns of server stupidity! Look at the patterns of use for specific terms and messages that were extra dumb!
                                </p>
                            </div>
                            <div className="row">

                                <div className="col">
                                    <p><strong><AiFillStar className="purple-bullet-star" />Graphs</strong></p>
                                </div>
                                <div className="col">
                                    <p><strong><AiFillStar className="purple-bullet-star" />Charts</strong></p>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col">
                                    <p><strong><AiFillStar className="purple-bullet-star" />Customization</strong></p>
                                </div>
                                <div className="col">
                                    <p><strong><AiFillStar className="purple-bullet-star" />Other Shit</strong></p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="mission-graph text-center ">
                            <Slide direction="right">
                                <img id="Landing_Graph_Img_1" width="100%" src={Landing_Charts1} alt="Landing_Graph1"></img>
                            </Slide>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default LaughWithFriendsSection;
