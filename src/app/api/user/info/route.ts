import { NextRequest, NextResponse } from "next/server";
import { usersTable, walletsTable, userInfoTable } from "@/utils/database/drizzle-schemas";
import { db } from "@/utils/database/neon";
import { eq } from "drizzle-orm";



//Add user info

//Retrieve user info

//Check if info exists

export async function GET(req: NextRequest) {

    //Retrieve user info

    //return failed if info not exists

    const { searchParams } = new URL(req.url);
    const u_id = searchParams.get("u_id");
    if (u_id) {
        const data = await db.select().from(userInfoTable).where(eq(userInfoTable.u_id, +u_id));
        if (data[0]) {
            return NextResponse.json({ status: "success", data: data[0] });
        }
        return NextResponse.json({ status: "failed", message: "Information not exists" });
    }
    return NextResponse.json({ status: "failed", message: "Include u_id in search params" });
}

export async function POST(req: NextRequest) {
    //Add user info

    const { u_id, first_name, last_name, country, phoneNumber } = await req.json();

    const already = await db.select().from(userInfoTable).where(eq(u_id, userInfoTable.u_id));
    if (already[0]) {
        return NextResponse.json({ status: "already-available" });
    }

    console.log("Already:", already);

    try {
        const res = await db.insert(userInfoTable).values({ u_id, first_name, last_name, country, phoneNumber }).returning();
        return NextResponse.json({ status: "success", data: res[0] });

    } catch (e) {
        return NextResponse.json({ status: "error", message: "User with id don't exist" })
    }
}

