// src/utils/database/tableSchemas.ts

import { sql } from "drizzle-orm";

export const createUsersTable = sql`
CREATE TABLE IF NOT EXISTS users (
  u_id SERIAL PRIMARY KEY,
  email TEXT NOT NULL
);
`;

export const createWalletsTable = sql`
CREATE TABLE IF NOT EXISTS wallets (
  u_id INTEGER REFERENCES users(u_id),
  address TEXT
);
`;

export const createUserInfoTable = sql`
CREATE TABLE IF NOT EXISTS user_info (
  u_id INTEGER REFERENCES users(u_id),
  first_name TEXT,
  last_name TEXT,
  country TEXT,
  phone_number TEXT
);
`;

export const createProjectsTable = sql`
CREATE TABLE IF NOT EXISTS projects (
  u_id INTEGER REFERENCES users(u_id),
  project_id SERIAL PRIMARY KEY,
  title TEXT,
  description TEXT,
  budget NUMERIC,
  skills TEXT,
  scope TEXT,
  docs TEXT,
  date_posted VARCHAR,
  time_posted VARCHAR
);
`;

export const createFreelancersTable = sql`
CREATE TABLE IF NOT EXISTS freelancers (
  f_id SERIAL PRIMARY KEY,
  u_id INTEGER REFERENCES users(u_id),
  title TEXT,
  image TEXT,
  description TEXT
);
`;

export const createFreelancerWorkHistoryTable = sql`
CREATE TABLE IF NOT EXISTS f_work_history (
  freelancerWorkHistoryId SERIAL PRIMARY KEY,
  freelancerId INTEGER REFERENCES freelancers(f_id),
  company TEXT,
  job_title TEXT,
  job_desc TEXT,
  workLocation TEXT
);
`;

export const createFreelancerEducationTable = sql`
CREATE TABLE IF NOT EXISTS f_education (
  freelancerEducationId SERIAL PRIMARY KEY,
  freelancerId INTEGER REFERENCES freelancers(f_id),
  school TEXT,
  from_ TEXT,
  to_ TEXT,
  educationDescription TEXT,
  degree TEXT
);
`;

export const createFreelancerCertificationTable = sql`
CREATE TABLE IF NOT EXISTS f_certification (
  freelancerCertificationId SERIAL PRIMARY KEY,
  freelancerId INTEGER REFERENCES freelancers(f_id),
  title TEXT,
  organization TEXT,
  dateOfCompletion TEXT,
  credentialsId TEXT
);
`;
