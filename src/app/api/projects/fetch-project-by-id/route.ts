import { NextRequest, NextResponse } from "next/server";
import { usersTable, walletsTable, userInfoTable, projectsTable } from "@/utils/database/drizzle-schemas";
import { db } from "@/utils/database/neon";
import { eq } from "drizzle-orm";



export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const target_id = searchParams.get("target_id");
    if (target_id) {
        const data = await db.select().from(projectsTable).where(eq(projectsTable.project_id, +target_id));
        return NextResponse.json({ status: "success", data });
    }


}