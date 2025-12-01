import arrow from "../assets/icons/angle-right.png";
import play from "../assets/icons/play.png";

type Tech = [string, string];

function ProjectDiv(props: any) {
    return (
        <div className="project-div">
            <div className="thumbnail">
                <img src={props.thumbnail} alt="thumbnail" />
            </div>
            <div className="proj-details">
                <p className="proj-name">{props.name}</p>
                <p className="proj-desc">{props.desc}</p>
                <div className="proj-techs">
                    {props.techs.map((tech: Tech, i: any) => (
                        <div className="tech" key={i}>
                            <img src={tech[1]} alt="tech-logo" />
                            {tech[0]}
                        </div>
                    ))}
                </div>
            </div>
            <div className="buttons">
                {props.live_demo && (
                    <a href={props.live_demo} target="blank">
                        <button>
                            Live Demo <img src={play} alt="" />
                        </button>
                    </a>
                )}
                <a href={props.github} target="blank">
                    <button>
                        GitHub <img src={arrow} alt="arrow-icon" />
                    </button>
                </a>
            </div>
        </div>
    );
}

export default ProjectDiv;
