import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './../index.css'

export class About extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {


        return (
            <div className="container row">
                <p className="jap">My Intro to Coding</p>
                <p className="jap small">[enter 2007]</p>

                <div className="row">

                    <p className="jap small text-start">
                        <span>I was introduced to programming at an early age thanks to the PSP my dad bought me in 2007. </span>
                        <span>My favorite game to play on it was Grand Theft Auto: Vice City Stories, </span>
                        <span>simply because I was in a world where I can roam free to do anything I wanted. </span>
                        <span>But not really... You see, I wanted more than just to drive around and ignore side missions. </span>
                        <span>I wanted more than to use the same old health and spawn cheats given to us on code forum sites. </span>
                        <span>I was looking for a way mod GTA: VCS. And by that I meant full blown scripts.</span>
                    </p>
                </div>
                <div className="container container-fluid row">

                    <div className="vcs col-md-6"/>
                    <div className="col-md-6">
                        <p className="jap small text-start">
                            <span>I've got R* and edison carter to thank for this experience. And it didnt stop there! </span>
                            <span>Since then i've created mods for Grand Theft Auto IV (360 & PS3), and Grand Theft Auto V (PS3 & PS4). </span>
                            <span>I was honing my programming skills for bigger things to come. </span>
                            <span>Hacking GTA was fun I was able to learn about memory, and types of data </span>
                            <span>such as bit, byte, short, etc. I then went onto building an android app to mod GTA from your android phone. </span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JFPDazP2rms"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
                <div className="row">
                    <p className="jap small text-start">
                        <br/>
                        <span>A Whole Remote Protocol to mod gta. This involved using sockets and sending where to get/set memory to and from. </span>
                        <span>I had the flexiblity to make playing gta easier as if i'm using the gta phone in my own hand!</span>
                        <span>It felt great and many jailbroken ps3 users used this app!  </span>
                    </p>
                </div>

                <div className="row">

                    <div className="lane col-md-6"/>
                    <div className="lane2 col-md-6"/>
                    <div className="col-md-12">
                        <p className="jap small text-start">
                            <br/>
                            <span>Here you see a clip of lane detection with OpenCV. </span>
                            <span>Nowadays i'm working a lot with Computer Vision & Machine and Reinforcement learning. </span>
                            <span>Maybe something cool to come? who knows</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;