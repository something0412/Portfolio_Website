import { logos, thumbnails } from "./statics";

const links = {
    email: "mailto:bill2682004@gmail.com",
    github: "https://github.com/something0412",
    discord: "https://discord.com/users/653856510958370828",
    instagram: "https://www.instagram.com/l.bil__",
    linkedin: "https://linkedin.com/in/phuocvinhle",
};
const skills = {
    languages: [
        {
            icon: logos.java,
            name: "Java",
        },
        {
            icon: logos.python,
            name: "Python",
        },
        {
            icon: logos.javascript,
            name: "JavaScript",
        },
        {
            icon: logos.typescript,
            name: "TypeScript",
        },
        {
            icon: logos.cplus,
            name: "C++",
        },
        {
            icon: logos.csharp,
            name: "C#",
        },
        {
            icon: logos.sql,
            name: "SQL",
        },
        {
            icon: [logos.html, logos.css],
            name: "HTML/CSS",
        },
    ],
    technologies: [
        {
            icon: logos.react,
            name: "React",
        },
        {
            icon: logos.nodejs,
            name: "Node.js",
        },
        {
            icon: logos.git,
            name: "Git",
        },
        {
            icon: logos.mongodb,
            name: "MongoDB",
        },
        {
            icon: logos.flask,
            name: "Flask",
        },
        {
            icon: logos.socketio,
            name: "Socket.io",
        },
    ],
}
const projects = [
    {
        name: "Live Chat",
        thumbnail: thumbnails.live_chat_tn,
        desc: "A real-time web chat application that allows users to create rooms and communicate instantly. Powered by a React interface and a Flask server, it keeps conversations fast and smooth",
        github: "https://github.com/something0412/live_chat",
        live_demo: "",
        techs: [["React", logos.react], ["TypeScript", logos.typescript], ["Python", logos.python], ["Flask", logos.flask], ["Socket.io", logos.socketio], ["MongoDB", logos.mongodb]],
    },
    {
        name: "To-Do Mobile App",
        thumbnail: thumbnails.todo_tn,
        desc: "Built with React Native, this to-do app provides a fast, minimal task experience. It uses AsyncStorage for reliable local storage and helps users stay organized with a simple interface",
        github: "https://github.com/something0412/To-do-App",
        live_demo: "",
        techs: [["React", logos.react], ["TypeScript", logos.typescript], ["Expo", logos.expo], ["Tailwind", logos.tailwind],],
    },
    {
        name: "This Portfolio",
        thumbnail: thumbnails.portfolio_tn,
        desc: "This Portfolio is built from scratch by me.",
        github: "https://github.com/something0412/Portfolio_Website",
        live_demo: "",
        techs: [["React", logos.react], ["TypeScript", logos.typescript], ["CSS", logos.css],],
    },
    
]

export {skills, links, projects}