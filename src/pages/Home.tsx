import { useEffect, useState } from "react";
import "../styles/home.css";
import animated_img from "../assets/images/final.png";
import animated_gif from "../assets/images/animatedGIF.gif";
import profile_img from "../assets/images/Profile_Pic_1.jpg";
import marker from "../assets/icons/marker.png";
import { skills, links, projects } from "../information/data";
import resume from "../assets/resume.pdf";
import { icons } from "../information/statics";
import Breaker from "../components/Breaker";
import Footer from "../components/Footer";

import type { SkillItem, Project } from "../information/types";

function Home() {
    function IntroText() {
        const fullText = [
            "Computer Science Student",
            "Aspiring Software Engineer",
        ];

        const [displayedText1, setDisplayedText1] = useState("");
        const [displayedText2, setDisplayedText2] = useState("");

        useEffect(() => {
            let index1 = 0;
            let index2 = 0;

            const typeFirst = () => {
                if (index1 < fullText[0].length) {
                    setDisplayedText1(fullText[0].slice(0, index1 + 1));
                    index1++;
                    setTimeout(typeFirst, 30);
                } else {
                    setTimeout(typeSecond, 30);
                }
            };

            const typeSecond = () => {
                if (index2 < fullText[1].length) {
                    setDisplayedText2(fullText[1].slice(0, index2 + 1));
                    index2++;
                    setTimeout(typeSecond, 30);
                }
            };

            typeFirst();
        }, []);

        return (
            <p className="intro-text">
                <span>Phuoc</span> <span className="pronounce">(foo-uke)</span>{" "}
                {displayedText1}
                {displayedText2 && (
                    <>
                        <span className="separator"> & </span>
                        {displayedText2}
                    </>
                )}
            </p>
        );
    }

    // Intro Section
    const IntroSec = () => {
        const [img, setImg] = useState(animated_img);
        return (
            <div className="intro-section">
                <div className="intro-container">
                    <IntroText />

                    <div className="intro-links">
                        <a className="intro-icon" href={resume} download>
                            <button className="resume-btn">
                                <img src={icons.resume} alt="resume-icon" />
                                Resume
                            </button>
                        </a>
                        <a
                            className="intro-icon"
                            href={links.linkedin}
                            target="blank"
                        >
                            <img src={icons.linkedin} alt="linkedin-icon" />
                        </a>
                        <a
                            className="intro-icon"
                            href={links.github}
                            target="blank"
                        >
                            <img src={icons.github} alt="github-icon" />
                        </a>
                        <a
                            className="intro-icon"
                            href={links.email}
                            target="blank"
                        >
                            <img src={icons.email} alt="email-icon" />
                        </a>
                    </div>
                </div>
                <div className="intro-img-container">
                    <img
                        src={img}
                        onMouseEnter={() => {
                            setImg(animated_gif);
                        }}
                        onMouseLeave={() => {
                            setImg(animated_img);
                        }}
                    />
                    <p className="current-status">Looking for internships</p>
                </div>
            </div>
        );
    };

    // About-me Section
    const AboutSec = () => {
        return (
            <>
                <div className="about-section">
                    <div className="profile-img-container">
                        <img src={profile_img} alt="profile-img" />
                    </div>
                    <div className="about-container">
                        <p className="name">
                            Phuoc Vinh Le
                            <img src={icons.check_mark} alt="check-mark" />
                        </p>
                        <div className="about-details">
                            <div className="detail">
                                <p className="focus">3</p>
                                <p>Projects</p>
                            </div>
                            <div className="detail">
                                <p className="focus">3.2</p>
                                <p>GPA</p>
                            </div>
                            <div className="detail">
                                <p className="focus">Jun 2027</p>
                                <p>Expected Graduation</p>
                            </div>
                        </div>
                        <p className="school">
                            <img src={marker} alt="location-marker" />
                            Houston, TX
                        </p>
                    </div>
                </div>
                <div className="about-skills">
                    <div className="languages">
                        <p>Languages: </p>
                        {skills.languages.map((language: SkillItem, i) => (
                            <div className="skill-container" key={i}>
                                {language.name}
                            </div>
                        ))}
                    </div>
                    <div className="technologies">
                        <p>Technologies: </p>
                        {skills.technologies.map((tech: SkillItem, i) => (
                            <div className="skill-container" key={i}>
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    };

    // Projects Section
    const ProjectImg = (props: { img: string; url: string }) => {
        return (
            <div className="project-img-container">
                <a href={props.url} target="blank">
                    <img src={props.img} alt="project-gif" />
                </a>
            </div>
        );
    };

    const ProjectDesc = (props: {
        name: string;
        desc: string;
        index: number;
    }) => {
        return (
            <div className="description-container">
                <p
                    style={
                        props.index % 2 != 0
                            ? { textAlign: "right", marginBottom: "2vh" }
                            : { marginBottom: "2vh" }
                    }
                >
                    <b>{props.name}</b>
                </p>
                <p className="description" style={{ textAlign: "justify" }}>
                    {props.desc}
                </p>
            </div>
        );
    };
    const ProjectsSec = () => {
        return (
            <div className="projects-section">
                {projects.map((project: Project, index) => {
                    if (index < 2) {
                        return (
                            <div
                                key={index}
                                className="project-container"
                                style={
                                    index % 2 == 0
                                        ? { justifyContent: "start" }
                                        : { justifyContent: "end" }
                                }
                            >
                                {index % 2 == 0 ? (
                                    <>
                                        <ProjectImg
                                            img={project.thumbnail}
                                            url={
                                                project.live_demo
                                                    ? project.live_demo
                                                    : project.github
                                            }
                                        />
                                        <ProjectDesc
                                            name={project.name}
                                            desc={project.desc}
                                            index={index}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <ProjectDesc
                                            name={project.name}
                                            desc={project.desc}
                                            index={index}
                                        />
                                        <ProjectImg
                                            img={project.thumbnail}
                                            url={
                                                project.live_demo
                                                    ? project.live_demo
                                                    : project.github
                                            }
                                        />
                                    </>
                                )}
                            </div>
                        );
                    }
                })}
            </div>
        );
    };
    // Display
    return (
        <>
            <div className="page home-page">
                <IntroSec />
                <Breaker text="About-me" />
                <AboutSec />
                <Breaker text="Recent Projects" />
                <ProjectsSec />
            </div>
            <Footer />
        </>
    );
}

export default Home;
