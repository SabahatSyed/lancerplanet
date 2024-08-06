import { NextRequest, NextResponse } from "next/server";
import { usersTable, walletsTable, userInfoTable } from "@/utils/database/drizzle-schemas";
import { db } from "@/utils/database/neon";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const targetEmail = searchParams.get("email");

    const allUserData =
        await db.select({ email: usersTable.email, address: walletsTable.address, u_id: usersTable.u_id }).
            from(usersTable).innerJoin(walletsTable, eq(walletsTable.u_id, usersTable.u_id));
    const user = allUserData.filter((user) => {
        return user.email == targetEmail;
    });

    if (user.length == 0) {
        return NextResponse.json({ status: "failed", message: "User not exists" });
    }

    return NextResponse.json({ status: "success", data: user[0] });

}

