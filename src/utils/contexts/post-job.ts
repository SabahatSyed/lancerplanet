import { createContext } from "react";
import { type ProjectFormData } from "../types/post-job";

export const initialState: ProjectFormData = {
    title: "Need a Nextjs Developer",
    skillTags: ["NextJS", "HTML", "CSS", "Typescript"],
    description: "Hi! I need a nextjs developer",
    budget: 100,
    scope: "Intermediate",
    document: "https://www.nextjs.com",
};

export const PostJobContext = createContext<{ state: ProjectFormData, dispatch: any }>({ state: initialState, dispatch: () => { } });