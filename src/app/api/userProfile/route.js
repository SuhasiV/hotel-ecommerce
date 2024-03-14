import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import User from "@/models/User";
import dbConnect from "@/utils/dbConn";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const data = getDataFromToken(req); //data will return id and isAdmin
    const user = await User.findOne({ _id: data.id }).select("-password");
    return NextResponse.json({
      message: "user found",
      data: user,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
