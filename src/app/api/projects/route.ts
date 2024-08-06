import { NextRequest, NextResponse } from "next/server";
import { usersTable, walletsTable, userInfoTable, projectsTable } from "@/utils/database/drizzle-schemas";
import { db } from "@/utils/database/neon";
import { eq } from "drizzle-orm";

// 1.POST a new project
// 2.Retrieve all proje
// 3.Get jobs posted by a specific user 

export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url);
    const u_id = +searchParams.get("u_id")!;
    let data;
    if (u_id > 0) {
        //Fetch projects posted by a specific user
        data = await db.select().from(projectsTable).where(eq(projectsTable.u_id, u_id));
    }
    else {
        data = await db.select().from(projectsTable);
    }
    //Fetch all projects

    return NextResponse.json({ status: "success", data });
}


export async function POST(req: NextRequest) {
    const { u_id, title, skillTags, description, budget, scope, document } = await req.json();
    const skills = skillTags.join(",");

    const data = {
        u_id,
        title,
        description,
        budget,
        docs: document,
        skills,
        date_posted: (new Date().toLocaleDateString()),
        time_posted: (new Date().toLocaleTimeString()),
        scope
    };

    const user = await db.select().from(usersTable).where(eq(usersTable.u_id, u_id));
    if (!user[0]) {
        return new Response("User not exists", { status: 403 })
    }
    const res = await db.insert(projectsTable).values(data).returning();
    console.log("Posted project:", res);
    return NextResponse.json({ status: "success" });

}