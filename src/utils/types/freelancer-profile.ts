export type EducationForm = {
    schoolName: string;
    degree: string;
    from: string;
    to: string;
    description?: string;
};
export type EmploymentForm = {
    companyName: string;
    city: string;
    country: string;
    title: string;
    description: string;
};

export type PortfolioForm = {
    title: string;
    description?: string;
    image?: File;
    url?: string;
};

export type CertificationForm = {
    certificateName: string;
    organization: string;
    credentialID?: string;
    date: string;
};

export type SocialLinks = {
    github: string;
    discord: string;
    stackoverflow: string;
    linkedin: string;
    twitter: string;
};


export type FreelancerProfileType = {
    title: string;
    avatar: string;
    description: string;
    workHistory: EmploymentForm[];
    educations: EducationForm[];
    certifications: CertificationForm[];
    socialLinks: SocialLinks;
    portfolio: PortfolioForm[];
    skillTags: string[]
}