import React from "react";
import "./App.css";
import robheadshot from "./robheadshot_crop.jpg";
import { CSSTransitionGroup } from "react-transition-group";

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: 1,
            header: "Home",
            copy:
                "I improve your systems by measurable amounts through a measurable curiosity. I adapt to leadership through experience within months time of being on a project. I kick two-times the butt of a normal software dev by increasing the swing velocity of my foot. Want to know more about me? Click around this intentionally mimimalistic site to see what I'm up to."
        };
    }

    NavClick = e => {
        e.preventDefault();
        let navTo = e.target.value;
        if (navTo === "home") {
            this.setState({
                id: 1,
                header: "Home",
                copy:
                    "I improve your systems by measurable amounts through a measurable curiosity. I adapt to leadership through experience within months time of being on a project. I kick two-times the butt of a normal software dev by increasing the swing velocity of my foot. Want to know more about me? Click around this intentionally mimimalistic site to see what I'm up to."
            });
        } else if (navTo === "projects") {
            this.setState({
                id: 2,
                header: "Projects",
                copy: [
                    {
                        id: 1,
                        project_title: "WoW Classic News Scrapper",
                        github:
                            "https://github.com/rches/wowclassic-news-scraper",
                        description:
                            "I am a big nerd and I liked playing World of Warcraft. Big problems came when I had no time to keep up with the scuttlebutt regarding it. I created a web scraper that scraped the Blizzard forums, logged the top posts, looked at the scores and lastly, analyzed the positive or negative words in each post to try and understand the mood of each post. Spoiler - the posts are mostly negative."
                    },
                    {
                        id: 2,
                        project_title: "Nursing Timer v2.0",
                        github: "https://github.com/rches/nursing_timer_v2",
                        description:
                            "I'm a little bit sentimental. This project is a rebuild of my very first app, which was a l;abor of love for my wife and my daughter when she was three weeks old. Any new parent will tell you that brainspace is limited during the first month of a new born. This timer is to help with nursing and BMs to report out should the pediatrician have any questions. Save your peace of mind for snuggles."
                    },
                    {
                        id: 3,
                        project_title: "Martian Viewer",
                        github: "https://github.com/rches/martianviewer",
                        description:
                            "When learning to code I set a few milestones for myself. One of those milestones was to work with NASA data. I realized that coding wouldn't be the same as rocket science, but it would still be really cool to parse official data from something outside the atmosphere. This app will show you a still image from the Mars rover when you submit a date. This was my first React app and also had error handling (thanks, Tom Hanks!). Give it a spin, because Mars really is a cool place to explore."
                    }
                ]
            });
        } else if (navTo === "fun") {
            this.setState({
                id: 3,
                header: "Fun Stuff",
                copy: "FIND OUT ABOUT ME AND THE  FUN STUFF  FUN STUFF  "
            });
        }
    };
    render() {
        return (
            <wrapper className="App">
                <div className="hero">
                    <div className="container">
                        <div className="row">
                            <div className="one-half column part-a">
                                <h1 className="hero-heading">
                                    this is the start of something great
                                </h1>
                            </div>
                            <div className="one-half column part-b">
                                <img
                                    src={robheadshot}
                                    alt="rob smiling"
                                    className="hero-img"
                                ></img>
                                <h4 className="hero-description">
                                    yeah this is really great
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="one-third column part-a">
                                <nav className="nav">
                                    <h3>Nav</h3>
                                    <ul>
                                        <li>
                                            <button
                                                value="home"
                                                onClick={this.NavClick}
                                            >
                                                Home
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                value="projects"
                                                onClick={this.NavClick}
                                            >
                                                Projects
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                value="fun"
                                                onClick={this.NavClick}
                                            >
                                                Fun Stuff
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="two-thirds column part-b changes">
                                <h3>{this.state.header}</h3>
                                <CSSTransitionGroup
                                    transitionName="example"
                                    transitionEnterTimeout={150}
                                    transitionLeaveTimeout={75}
                                >
                                    <p key={this.state.id}>{this.state.copy}</p>
                                </CSSTransitionGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </wrapper>
        );
    }
}

export default App;
