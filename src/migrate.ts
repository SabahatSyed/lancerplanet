// src/migrate.ts
import { sql } from "drizzle-orm";
import { db } from "./utils/database/neon"; // Adjust the import path as necessary
import {
  createUsersTable,
  createWalletsTable,
  createUserInfoTable,
  createProjectsTable,
  createFreelancersTable,
  createFreelancerWorkHistoryTable,
  createFreelancerEducationTable,
  createFreelancerCertificationTable,
} from "./utils/database/tableSchemas";

const dropTables = sql`
DROP TABLE IF EXISTS f_certification;
DROP TABLE IF EXISTS f_education;
DROP TABLE IF EXISTS f_work_history;
DROP TABLE IF EXISTS freelancers;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS user_info;
DROP TABLE IF EXISTS wallets;
DROP TABLE IF EXISTS users;
`;

async function migrate() {
  try {
    // Drop existing tables
    await db.execute(dropTables);

    // Create tables
    await db.execute(createUsersTable);
    await db.execute(createWalletsTable);
    await db.execute(createUserInfoTable);
    await db.execute(createProjectsTable);
    await db.execute(createFreelancersTable);
    await db.execute(createFreelancerWorkHistoryTable);
    await db.execute(createFreelancerEducationTable);
    await db.execute(createFreelancerCertificationTable);

    console.log("All tables created successfully");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

migrate();
