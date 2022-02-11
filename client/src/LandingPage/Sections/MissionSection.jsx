import React from 'react'
import Landing_Graph1 from "./Images/Landing_Graph1.png"
import { Slide } from "react-awesome-reveal";

function MissionSection() {
    return (
        <section className="Mission">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="mission-graph text-center">
                            <Slide direction="left">
                                <img id="Landing_Graph_Img_1" width="100%" src={Landing_Graph1} alt="Landing_Graph1"></img>
                            </Slide>
                        </div>
                    </div>
                    <div className="col">
                            <div className="headline-container">
                                <h1 className="headline headline-2">
                                    We needed more memes.
                                </h1>
                            </div>
                            <div className="tagline-box tagline-box-2">
                                <p className="tagline tagline-2">
                                    Our mission is to create a fun, informative, and high-quality product where nerds like you can view trends and dank infographics about the activity within recreational discord servers. This tool is designed to entertain and spark fun conversations within the servers we reach, for tools like you.                            </p>
                                <div className="align-bottom">
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default MissionSection;
