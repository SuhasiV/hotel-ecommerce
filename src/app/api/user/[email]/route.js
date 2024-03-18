import dbConn from "@/utils/dbConn";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import { checkAdmin } from "@/app/helpers/checkAdmin";

//GET ONE
export async function GET(req, { params }) {
  const { email } = params;
  try {
    await dbConn();
    //data will return id and isAdmin
    const user = await User.findOne({ email: email });

    if (!user) {
      return NextResponse.json({
        message: "User not found",
      });
    }
    return NextResponse.json({
      message: "googleUser",
      data: user,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
