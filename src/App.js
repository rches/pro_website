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
                "I improve your projects by measurable amounts through curiosity and hard work. I prove my value within an organization within a month's time. I kick two-times the butt of a normal software dev by increasing the swing velocity of my foot. Want to know more about me? Click around this intentionally minimalistic site to see what I'm up to."
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
                    "I improve your projects by measurable amounts through curiosity and hard work. I prove my value within an organization within a month's time. I kick two-times the butt of a normal software dev by increasing the swing velocity of my foot. Want to know more about me? Click around this intentionally minimalistic site to see what I'm up to."
            });
        } else if (navTo === "projects") {
            this.setState({
                id: 2,
                header: "Projects",
                copy: [
                    {
                        id: 0,
                        project_title: "Customer Payment UI Challenge",
                        github: "https://github.com/rches/transaction_ui_exercise",
                        description: `Create React App | SkeletonCSS | Given a blank slate, created a sortable, paginated UI for users to sort through dummy data.`
                    },
                    {
                        id: 1,
                        project_title: "WoW Classic News Scrapper",
                        github: "https://github.com/rches/wowclassic-news-scraper",
                        description: `ApifySDK | NodeJS | MongoDB | React - A web scraping tool that parses online forum discussions to discover the latest news and rumors regarding a video game.`
                    },
                    {
                        id: 2,
                        project_title: "Nursing Timer v2.0",
                        github: "https://github.com/rches/nursing_timer_v2",
                        description:
                            "React | Firebase - A timer that helps document important details for tired parents. Made with love for my wife and children."
                    },
                    {
                        id: 3,
                        project_title: "Martian Viewer",
                        github: "https://github.com/rches/martianviewer",
                        description:
                            "React | NASA Official REST API - Basic components that make looking through images of Mars easy. Includes error handling."
                    }
                ]
            });
        } else if (navTo === "fun") {
            this.setState({
                id: 3,
                header: "Fun Stuff",
                copy: [
                    {
                        id: 1,
                        title: "Freelance Illustrator and Graphic Designer",
                        date_range: "2009 - Present",
                        description: "https://www.behance.net/robertcheseldine"
                    },
                    {
                        id: 2,
                        title: "Youth Ministry Volunteer",
                        date_range: "2017 - Present",
                        description: ""
                    },
                    {
                        id: 3,
                        title: "Podcaster",
                        date_range: "2020 - Present",
                        description: ""
                    },
                    {
                        id: 4,
                        title: "Maryland State Top Finalist - Magic: the Gathering",
                        date_range: "2008",
                        description: "http://old.starcitygames.com/decks/26973"
                    }
                ]
            });
        } else if (navTo === "contact") {
            this.setState({
                id: 4,
                header: "Contact",
                copy: [
                    {
                        id: 1,
                        title: "LinkedIn",
                        url: "https://www.linkedin.com/in/robertcheseldine/"
                    },
                    {
                        id: 2,
                        title: "Twitter",
                        url: "https://twitter.com/rcheseldine1"
                    },
                    {
                        id: 3,
                        title: "Github",
                        url: "https://github.com/rches"
                    },
                    {
                        id: 4,
                        title: "email",
                        url: "mailto:robert.cheseldine@gmail.com"
                    }
                ]
            });
        }
    };

    render() {
        const contentArea = this.state.id;
        let contentFormat;

        if (contentArea === 1) {
            contentFormat = <p key={this.state.id}>{this.state.copy}</p>;
        } else if (contentArea === 2) {
            const projectList = this.state.copy.map(el => {
                return (
                    <li key={el.id}>
                        <a href={el.github}>{el.project_title}</a>
                        {" - "}
                        {el.description}
                    </li>
                );
            });

            contentFormat = <ul>{projectList}</ul>;
        } else if (contentArea === 3) {
            const funList = this.state.copy.map(el => {
                return (
                    <li key={el.id}>
                        {el.description ? <a href={el.description}>{el.title}</a> : el.title}
                        {" - "} {el.date_range}
                    </li>
                );
            });

            contentFormat = <ul>{funList}</ul>;
        } else if (contentArea === 4) {
            const contactList = this.state.copy.map(el => {
                return (
                    <div key={el.id} className="three columns">
                        <a href={el.url}>
                            <button className="button">{el.title}</button>
                        </a>
                    </div>
                );
            });

            contentFormat = <div className="row">{contactList}</div>;
        }

        return (
            <wrapper className="App">
                <div className="hero">
                    <div className="container">
                        <div className="row">
                            <div className="one-half column part-a">
                                <h1 className="hero-heading">this is the start of something great</h1>
                            </div>
                            <div className="one-half column part-b">
                                <img src={robheadshot} alt="rob smiling" className="hero-img"></img>
                                <h4 className="hero-description">Rob Cheseldine - Software Dev</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="one-third column part-a">
                                <nav className="nav">
                                    <ul>
                                        <li>
                                            <button value="home" onClick={this.NavClick}>
                                                Home
                                            </button>
                                        </li>
                                        <li>
                                            <button value="projects" onClick={this.NavClick}>
                                                Projects
                                            </button>
                                        </li>
                                        <li>
                                            <button value="fun" onClick={this.NavClick}>
                                                Fun Stuff
                                            </button>
                                        </li>
                                        <li>
                                            <button value="contact" onClick={this.NavClick}>
                                                Contact
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
                                    {contentFormat}
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
