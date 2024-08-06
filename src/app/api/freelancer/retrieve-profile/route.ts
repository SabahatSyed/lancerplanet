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

export async function POST(req: NextRequest) {
    const { u_id } = await req.json();
    const data = await db.select().from(freelancersTable).where(eq(freelancersTable.u_id, u_id));
    if (data.length == 0) {
        return NextResponse.json({ status: "failed" });
    }
    return NextResponse.json({ status: "success", data });
}