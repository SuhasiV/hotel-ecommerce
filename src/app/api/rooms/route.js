import dbConn from "@/utils/dbConn";
import Room from "@/models/Room";
import { NextRequest, NextResponse } from "next/server";

//GET ALL
export async function GET() {
  try {
    await dbConn();

    const rooms = await Room.find();
    return NextResponse.json({
      message: "All rooms extracted sucessfully",
      rooms,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 501 });
  }
}
