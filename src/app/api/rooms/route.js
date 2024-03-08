import dbConn from "@/utils/dbConn";
import Room from "@/models/Room";
import { NextRequest, NextResponse } from "next/server";
//import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import { checkAdmin } from "@/app/helpers/checkAdmin";

//GET ALL ROOMS
export async function GET() {
  try {
    await dbConn();

    const room = await Room.find();
    return NextResponse.json({
      message: "All rooms extracted sucessfully",
      room,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 501 });
  }
}
