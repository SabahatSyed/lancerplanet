import { createContext } from "react";
import { type FreelancerProfileType } from "../types/freelancer-profile";

export const initialState: FreelancerProfileType = {
    title: "",
    avatar: "",
    description: "",
    workHistory: [],
    educations: [],
    certifications: [],
    socialLinks: {
        github: "",
        discord: "",
        stackoverflow: "",
        linkedin: "",
        twitter: "",
    },
    portfolio: [],
    skillTags: []
}

export const CreateFProfileContext =
    createContext<{ state: FreelancerProfileType, dispatch: any }>({ state: initialState, dispatch: () => { } });


