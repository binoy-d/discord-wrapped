import AddToDiscordButton from "./AddToDiscordButton";
import Marquee from "react-fast-marquee";

function HeroSection() {
    return (
        <section className="HeroSection">
            <div className="container-fluid hero-container">
                <div className="row">
                    <div className="col hero-left-col">
                        <div className="headline-container">
                            <h1 className="headline">
                                Seriously<br />Amusing.
                            </h1>
                        </div>
                        <div className="tagline-box">
                            <p className="tagline">
                                The greatest discord statistics plug-in, tailormade to get you bitches.
                            </p>
                            <div className="align-bottom">
                                <AddToDiscordButton />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="hero-boxgrid">

                            <div className="row ">
                                <div className="col col-6">
                                    <div className="hero-box" />
                                </div>
                                <div className="col col-6">
                                    <div className="hero-box" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col col-8">
                                    <div className="hero-box" />
                                </div>
                                <div className="col col-4">
                                    <div className="hero-box" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="braincells-container">
                <Marquee speed={100}>
                    <span className="braincells-box">
                        <p>📣 Scroll to lose brain cells 📣</p>
                    </span>
                    <span className="braincells-box">
                        <p>📣 Scroll to lose brain cells 📣</p>
                    </span>
                    <span className="braincells-box">
                        <p>📣 Scroll to lose brain cells 📣</p>
                    </span>
                    <span className="braincells-box">
                        <p>📣 Scroll to lose brain cells 📣</p>
                    </span>
                </Marquee>


            </div>
        </section>
    );
}

export default HeroSection;
