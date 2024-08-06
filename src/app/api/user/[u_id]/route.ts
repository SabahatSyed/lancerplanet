import { NextRequest, NextResponse } from "next/server";
import { usersTable, walletsTable, userInfoTable } from "@/utils/database/drizzle-schemas";
import { db } from "@/utils/database/neon";
import { eq } from "drizzle-orm";



export async function GET(req: NextRequest, { params: { u_id } }: { params: { u_id: string } }) {

    const res =
        await db.select({ u_id: usersTable.u_id, email: usersTable.email, address: walletsTable.address }).from(usersTable).innerJoin(walletsTable, eq(walletsTable.u_id, usersTable.u_id)).where(eq(usersTable.u_id, +u_id));
    const user_info = await db.select({
        firstName: userInfoTable.first_name,
        lastName: userInfoTable.last_name,
        country: userInfoTable.country,
        phoneNumber: userInfoTable.phoneNumber
    })
        .from(userInfoTable).innerJoin(usersTable, eq(usersTable.u_id, userInfoTable.u_id)).where(eq(usersTable.u_id, +u_id));


    const user_data = { ...res[0], ...user_info[0] }


    if (res.length == 0) {
        return NextResponse.json({ status: "failed", userFound: false, data: [] });
    }

    return NextResponse.json({ status: "success", userFound: true, data: user_data });

}

