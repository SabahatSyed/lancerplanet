import { type FreelancerProfileType } from "../types/freelancer-profile";

export const DISPATCH_ACTIONS = {
    SET_TITLE: "SET_TITLE",
    SET_DESCRIPTION: "SET_DESCRIPTION",
    SET_WORK_HISTORY: "SET_WORK_HISTORY",
    SET_EDUCATION: "SET_EDUCATION",
    SET_CERTIFICATION: "SET_CERTIFICATION",
    SET_AVATAR: "SET_AVATAR",
    SET_PORTFOLIO: "SET_PORTFOLIO",
    SET_SOCIAL_LINKS: "SET_SOCIAL_LINKS",
    SET_SKILL_TAGS: "SET_SKILL_TAGS"
}

// export type FreelancerProfileType = {
//     title: string;
//     avatar: File | null;
//     description: string;
//     workHistory: EmploymentForm[];
//     educations: EducationForm[];
//     certifications: CertificationForm[];
//     socialLinks: SocialLinks;
//     portfolio: PortfolioForm[]
//     skillTags:string[]
// }


export default function CreateFProfileReducer(state: FreelancerProfileType, action: any) {
    if (action.type == DISPATCH_ACTIONS.SET_TITLE) {
        return { ...state, title: action.payload }
    }
    else if (action.type == DISPATCH_ACTIONS.SET_DESCRIPTION) {
        return { ...state, description: action.payload }

    }
    else if (action.type == DISPATCH_ACTIONS.SET_AVATAR) {
        return { ...state, avatar: action.payload }

    }
    else if (action.type == DISPATCH_ACTIONS.SET_WORK_HISTORY) {
        return { ...state, workHistory: action.payload }

    }
    else if (action.type == DISPATCH_ACTIONS.SET_EDUCATION) {
        return { ...state, educations: action.payload }

    }
    else if (action.type == DISPATCH_ACTIONS.SET_CERTIFICATION) {
        return { ...state, certifications: action.payload }
    }

    else if (action.type == DISPATCH_ACTIONS.SET_SOCIAL_LINKS) {
        return { ...state, socialLinks: action.payload }
    }

    else if (action.type == DISPATCH_ACTIONS.SET_PORTFOLIO) {
        return { ...state, portfolio: action.payload }
    }
    else if (action.type == DISPATCH_ACTIONS.SET_SKILL_TAGS) {
        return { ...state, skillTags: action.payload }
    }
    return state;
}