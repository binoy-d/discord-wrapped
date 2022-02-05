import Landing_Award1 from "./Images/Landing_Award1.png"
import { AiFillStar } from "react-icons/ai"
import { Slide } from "react-awesome-reveal";

function AwardSection() {
    return (
        <section className="Mission">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="mission-graph text-center">
                            <Slide direction="left" >
                                <img id="Landing_Graph_Img_1" width="100%" src={Landing_Award1} alt="Landing_Graph1"></img>
                            </Slide>

                        </div>
                    </div>
                    <div className="col">
                        <div className="headline-container headline-lower">
                            <h1 className="headline headline-3 headline-4">
                                Have useless awards for each useless member!
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
                                    <p><strong><AiFillStar className="purple-bullet-star" />Leaderboards</strong></p>
                                </div>
                                <div className="col">
                                    <p><strong><AiFillStar className="purple-bullet-star" />Tiers</strong></p>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col">
                                    <p><strong><AiFillStar className="purple-bullet-star" />Shareable</strong></p>
                                </div>
                                <div className="col">
                                    <p><strong><AiFillStar className="purple-bullet-star" />Entirely Meaningless</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AwardSection;
