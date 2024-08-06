// src/utils/database/drizzle-schemas.ts
import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
  numeric,
  uniqueIndex,
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
  first_name: text("first_name"),
  last_name: text("last_name"),
  country: text("country"),
  phone_number: text("phone_number"),
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
  freelancer_work_history_id: serial("freelancer_work_history_id").primaryKey(),
  freelancer_id: numeric("freelancer_id").references(
    () => freelancersTable.f_id
  ),
  company: text("company"),
  job_title: text("job_title"),
  job_desc: text("job_desc"),
  work_location: text("work_location"),
});

export const freelancerEducationTable = pgTable("f_education", {
  freelancer_education_id: serial("freelancer_education_id").primaryKey(),
  freelancer_id: numeric("freelancer_id").references(
    () => freelancersTable.f_id
  ),
  school: text("school"),
  from_date: text("from_date"),
  to_date: text("to_date"),
  education_description: text("education_description"),
  degree: text("degree"),
});

export const freelancerCertificationTable = pgTable("f_certification", {
  freelancer_certification_id: serial(
    "freelancer_certification_id"
  ).primaryKey(),
  freelancer_id: numeric("freelancer_id").references(
    () => freelancersTable.f_id
  ),
  title: text("title"),
  organization: text("organization"),
  date_of_completion: text("date_of_completion"),
  credentials_id: text("credentials_id"),
});

export type User = InferModel<typeof usersTable>;
export type Wallet = InferModel<typeof walletsTable>;
export type Project = InferModel<typeof projectsTable>;
export type Freelancer = InferModel<typeof freelancersTable>;
export type FreelancerEducation = InferModel<typeof freelancerEducationTable>;
export type FreelancerCertification = InferModel<
  typeof freelancerCertificationTable
>;
export type FreelancerWorkHistory = InferModel<
  typeof freelancerWorkHistoryTable
>;
