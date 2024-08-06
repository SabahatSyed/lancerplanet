import { ProjectFormData } from "../types/post-job";
export default function PostJobReducer(state: ProjectFormData, action: any) {
    if (action.type == "SET_TITLE") {
        return { ...state, title: action.payload }
    }
    else if (action.type == "SET_DESCRIPTION") {
        return { ...state, description: action.payload }
    }
    else if (action.type == "SET_SKILLTAGS") {
        return { ...state, skillTags: action.payload }
    }
    else if (action.type == "SET_BUDGET") {
        return { ...state, budget: action.payload }
    }
    else if (action.type == "SET_SCOPE") {
        return { ...state, scope: action.payload }
    }
    else {
        return state;
    }
}