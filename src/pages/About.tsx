import profile_pic from "../assets/images/Profile_Pic_1.jpg";
import "../styles/about.css";
import bc_logo from "../assets/images/bc.jpeg";
import uh_logo from "../assets/images/uh.jpg";
import Breaker from "../components/Breaker";
import Footer from "../components/Footer";
import { skills } from "../information/data";
import type {
    EventProps,
    SchoolExpProps,
    SkillProps,
    SkillItem,
} from "../information/types";
import type { ReactNode } from "react";

function About() {
    const arr = [
        {
            img: bc_logo,
            school: "Bellevue College, WA",
            time: "Sep 2022",
            desc: "Enrolled in A.S.",
        },
        {
            img: bc_logo,
            school: "Bellevue College, WA",
            time: "Jun 2024",
            desc: "Graduated with A.S.",
        },
        {
            img: uh_logo,
            school: "University of Houston, TX",
            time: "Aug 2025",
            desc: "Transferred and Began B.S. in Computer Science",
        },
        {
            img: uh_logo,
            school: "University of Houston, TX",
            time: "Jun 2027",
            desc: "Expected Graduation: B.S. in Computer Science",
        },
    ];

    // Opening Section
    const OpenSec = () => {
        return (
            <div className="open-section">
                <div className="profile-pic-container">
                    <img src={profile_pic} alt="profile-img" />
                </div>
                <p className="open-desc">
                    Hi, my name is Phuoc, but I go by{" "}
                    <span className="highlighted">Bill</span>. I'm a{" "}
                    <span className="highlighted">
                        Computer Science student
                    </span>{" "}
                    at UH who enjoys creating simple and{" "}
                    <span className="highlighted">meaningful software</span>.
                    I'm <span className="highlighted">passionate</span> about
                    writing <span className="highlighted">clean code</span>,
                    building{" "}
                    <span className="highlighted">efficient applications</span>,
                    and continually{" "}
                    <span className="highlighted">
                        learning new technologies
                    </span>{" "}
                    to grow as a{" "}
                    <span className="highlighted">Software Engineer</span>.
                </p>
            </div>
        );
    };

    // Education Section
    const Event = (props: EventProps) => {
        return (
            <div className="timeline-event">
                <div className="event-img">
                    <img
                        src={props.img}
                        alt="event-img"
                        style={
                            props.img == bc_logo
                                ? { borderColor: "rgba(18, 89, 160, 0.3)" }
                                : { borderColor: "rgba(212, 42, 70, 0.3)" }
                        }
                    />
                </div>
                <p className="school-name">{props.school}</p>
                <div className="event-mark">
                    <div className="time-line"></div>
                    <div className="time-mark"></div>
                    <div className="time-line"></div>
                </div>
                <p className="event-time">{props.time}</p>
                <p className="event-desc">{props.desc}</p>
            </div>
        );
    };
    const school_exp = {
        bc: {
            logo: bc_logo,
            bg_color: "rgba(191, 217, 243, 0.3)",
            period: "2022 - 2025",
            skills: [],
            exp: [
                <>
                    Worked as a{" "}
                    <span className="keywords">
                        Student Engagement Front Desk Assistant
                    </span>
                    , assisting <span className="keywords">30+ students</span>{" "}
                    daily and <span className="keywords">managing</span> the{" "}
                    <span className="keywords">student ID database</span>
                </>,
                <>
                    <span className="keywords">Led financial operations</span>{" "}
                    for a 50+ member tech club,{" "}
                    <span className="keywords">
                        developing a budget management system
                    </span>
                    , securing funding for more than{" "}
                    <span className="keywords">3 major events</span>, and
                    ensuring fiscal responsibility
                </>,
            ],
        },
    };
    const SchoolExp = (props: SchoolExpProps) => {
        return (
            <div className="school-exp-container">
                <div className="school-logo-area">
                    <div className="school-logo">
                        <img src={props.logo} alt="school-logo" />
                    </div>
                    <p className="school-period">{props.period}</p>
                </div>
                <div
                    className="exps"
                    style={{ flex: 1, backgroundColor: `${props.bg_color}` }}
                >
                    {props.exp_list.map((exp: ReactNode, i: number) => (
                        <li className="exp-text" key={i}>
                            {exp}
                        </li>
                    ))}
                </div>
            </div>
        );
    };
    const EduSec = () => {
        return (
            <div className="edu-section">
                <div className="edu-timeline">
                    {arr.map((event: EventProps, i) => (
                        <Event
                            key={i}
                            img={event.img}
                            school={event.school}
                            time={event.time}
                            desc={event.desc}
                        />
                    ))}
                </div>
                <SchoolExp
                    logo={school_exp.bc.logo}
                    period={school_exp.bc.period}
                    exp_list={school_exp.bc.exp}
                    bg_color={school_exp.bc.bg_color}
                />
            </div>
        );
    };

    // Skills Section

    const Skill = (props: SkillProps) => {
        const imgSrc = Array.isArray(props.icon) ? props.icon[0] : props.icon;

        return (
            <div className="skill-block">
                {props.name === "HTML/CSS" && Array.isArray(props.icon) ? (
                    <div className="diagonal-container">
                        <img src={props.icon[0]} className="icon icon-left" />
                        <img src={props.icon[1]} className="icon icon-right" />
                    </div>
                ) : (
                    <img src={imgSrc} alt="skill-icon" />
                )}
                <p className="skill-name">{props.name}</p>
            </div>
        );
    };
    const SkillsSec = () => {
        return (
            <div className="skills-section">
                {skills.languages.map((language: SkillItem, i) => (
                    <Skill key={i} icon={language.icon} name={language.name} />
                ))}
                {skills.technologies.map((tech: SkillItem, i) => (
                    <Skill key={i} icon={tech.icon} name={tech.name} />
                ))}
            </div>
        );
    };
    return (
        <>
            <div className="page about-page">
                <OpenSec />
                <Breaker text="Education" />
                <EduSec />
                <Breaker text="Skills" />
                <SkillsSec />
            </div>
            <Footer />
        </>
    );
}

export default About;
