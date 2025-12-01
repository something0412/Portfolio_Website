import type { ReactNode, FormEvent} from "react";

//? =============================================
//? HOME, PROJECTS, ABOUT Page
//? =============================================
export interface SkillItem {
    name: string;
    icon: string | string[];
}

export interface Project {
    name: string;
    thumbnail: string;
    desc: string;
    github: string;
    live_demo: string;
    techs: any;
}

//? =============================================
//? ABOUT Page
//? =============================================
// Props for the timeline event
export interface EventProps {
    img: string;
    school: string;
    time: string;
    desc: string;
}

// Props for the SchoolExp component
export interface SchoolExpProps {
    logo: string;
    period: string;
    exp_list: ReactNode[];
    bg_color: string;
}

// Props for Skill component
export interface SkillProps {
    icon: string | string[];
    name: string;
}

//? =============================================
//? CONTACT Page
//? =============================================

export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export type PlaceholderMap = Record<string, string>;

export type SubmitEvent = FormEvent<HTMLFormElement>;
