import {
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
    boolean,
    numeric,
    uniqueIndex
} from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";


export const usersTable = pgTable("users", {
    u_id: serial("u_id").primaryKey(),
    email: text("email"),
});



export const walletsTable = pgTable("wallets", {
    u_id: serial("u_id").references(() => usersTable.u_id),
    address: text("address"),
});



export const userInfoTable = pgTable("user_info", {
    u_id: serial("u_id").references(() => usersTable.u_id),
    first_name: text("f_name"),
    last_name: text("l_name"),
    country: text("country"),
    phoneNumber: text("phone"),
});





export const projectsTable = pgTable("projects", {
    u_id: serial("u_id").references(() => usersTable.u_id),
    project_id: serial("project_id").primaryKey(),
    title: text("title"),
    description: text("description"),
    budget: numeric("budget"),
    skills: text("skills"),
    scope: text("scope"),
    docs: text("docs"),
    date_posted: varchar("date_posted"),
    time_posted: varchar("time_posted"),
});

export const freelancersTable = pgTable("freelancers", {
    f_id: serial("f_id").primaryKey(),
    u_id: numeric("u_id").references(() => usersTable.u_id),
    title: text("title"),
    image: text("image"),
    description: text("description"),
});


export const freelancerWorkHistoryTable = pgTable("f_work_history", {
    freelancerWorkHistoryId: serial("f_wh_id").primaryKey(),
    freelancerId: numeric("f_id").references(() => freelancersTable.f_id),
    company: text("company"),
    job_title: text("job_title"),
    job_desc: text("job_desc"),
    workLocation: text("w_location")
});



export const freelancerEducationTable = pgTable("f_education", {
    freelancerEducationId: serial("f_e_id").primaryKey(),
    freelancerId: numeric("f_id").references(() => freelancersTable.f_id),
    school: text("school"),
    from_: text("from_"),
    to_: text("to_"),
    educationDescription: text("ed_desc"),
    degree: text("degree"),
});



export const freelancerCertificationTable = pgTable("f_certification", {
    freelancerCertificationId: serial("f_c_id").primaryKey(),
    freelancerId: numeric("f_id").references(() => freelancersTable.f_id),
    title: text("school"),
    organization: text("organization"),
    dateOfCompletion: text("comp_date"),
    credentialsId: text("creds_id"),
});




export type User = InferModel<typeof usersTable>
export type Wallet = InferModel<typeof walletsTable>
export type Project = InferModel<typeof projectsTable>
export type Freelancer = InferModel<typeof freelancersTable>
export type FreelancerEducation = InferModel<typeof freelancerEducationTable>
export type FreelancerCertification = InferModel<typeof freelancerCertificationTable>
export type FreelancerWorkHistory = InferModel<typeof freelancerWorkHistoryTable>
