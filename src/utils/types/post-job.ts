export type ProjectFormData = {
    title: string;
    skillTags: string[];
    description: string;
    budget: number;
    scope: "Long-Term" | "Intermediate" | "Short-Term";
    document: string;
};