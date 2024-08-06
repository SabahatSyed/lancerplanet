import { NextRequest, NextResponse } from "next/server";
import {
    usersTable,
    walletsTable,
    userInfoTable,
    projectsTable,
    freelancersTable,
    freelancerCertificationTable,
    freelancerEducationTable,
    freelancerWorkHistoryTable
} from "@/utils/database/drizzle-schemas";
import { db } from "@/utils/database/neon";
import { eq } from "drizzle-orm";


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

// export type SocialLinks = {
//     github: string;
//     discord: string;
//     stackoverflow: string;
//     linkedin: string;
//     twitter: string;
// };


// export type FreelancerProfileType = {
//     title: string;
//     avatar: File | null;
//     description: string;
//     workHistory: EmploymentForm[];
//     educations: EducationForm[];
//     certifications: CertificationForm[];
//     socialLinks: SocialLinks;
//     portfolio: PortfolioForm[];
//     skillTags: string[]
// }
export async function POST(req: NextRequest) {
    const {
        u_id,
        title,
        description,
        workHistory,
        educations,
        certifications,
        socialLinks,
        portfolio,
        skillTags
    } = await req.json();
    //Store image in Vercel blob here... retrieve it's URL. then store it in DB. 

    const freelancerData = {
        u_id,
        title,
        image: "",
        description,
    }
    const user = await db.select().from(usersTable).where(eq(usersTable.u_id, u_id));
    if (!user[0]) {
        return new Response("User with this ID do not exist", { status: 500 })
    }

    //Store this freelancer data in db. Query will return f_id.
    //Use f_id to store info in next tables.
    const f_data =
        await db.insert(freelancersTable).values(freelancerData).returning();

    const freelancerId = f_data[0].f_id; //For now.

    const workHistoryData = workHistory.map((wh: EmploymentForm) => {
        return {
            freelancerId,
            company: wh.companyName,
            workLocation: wh.city + "-" + wh.country,
            job_title: wh.title,
            job_desc: wh.description,
        }
    });
    console.log(workHistoryData);

    const educationData = educations.map((education: EducationForm) => {
        return {
            freelancerId,
            school: education.schoolName,
            from_: education.from,
            to_: education.to,
            educationDescription: education.description,
            degree: education.degree,
        }
    });

    // const certificationsData = certifications.map((certification: CertificationForm) => {
    //     return {
    //         freelancerId,
    //         title: certification.certificateName,
    //         organization: certification.organization,
    //         dateOfCompletion: certification.date,
    //         credentialsId: certification.credentialID
    //     }
    // });


    // let all_data: any = {};
    // if (certificationsData.length > 0) {
    //     await db.insert(freelancerCertificationTable).values(certificationsData);
    // }
    if (educationData.length > 0) {

        await db.insert(freelancerEducationTable).values(educationData);
    }
    if (workHistoryData.length > 0) {
        await db.insert(freelancerWorkHistoryTable).values(workHistoryData);;
    }


    return NextResponse.json({ status: "success", data: f_data });
}