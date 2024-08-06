import { NextRequest, NextResponse } from "next/server";
import { usersTable, walletsTable, userInfoTable } from "@/utils/database/drizzle-schemas";
import { db } from "@/utils/database/neon";
import { eq } from "drizzle-orm"


export async function POST(req: NextRequest) {
    const { email, address } = await req.json();
    const user =
        await db.select({ email: usersTable.email, address: walletsTable.address }).
            from(usersTable).innerJoin(walletsTable, eq(walletsTable.u_id, usersTable.u_id)).
            where(eq(usersTable.email, email));

    //Check whether if user exists
    if (user[0]) {
        return NextResponse.json({ status: "failed", message: "User already registered." })
    }

    const data = await db.insert(usersTable).values({ email }).returning();

    const u_id = data[0].u_id;

    const wallet_res = await db.insert(walletsTable).values({ u_id, address }).returning();

    return NextResponse.json({ status: "success", data: { ...wallet_res[0], ...data[0] } });

}