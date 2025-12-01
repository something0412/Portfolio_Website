import ProjectDiv from "../components/Project";
import "../styles/projects.css";
import { projects } from "../information/data";
import Footer from "../components/Footer";
import Breaker from "../components/Breaker";

import type { Project } from "../information/types";

function Projects() {
    const ProjectsSec = () => {
        return (
            <div className="main-projects">
                {projects.map((proj: Project, i) => (
                    <ProjectDiv
                        key={i}
                        name={proj.name}
                        thumbnail={proj.thumbnail}
                        desc={proj.desc}
                        github={proj.github}
                        live_demo={proj.live_demo}
                        techs={proj.techs}
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="page projects-page">
                <Breaker text="Projects" />
                <ProjectsSec />
            </div>
            <Footer />
        </>
    );
}

export default Projects;
