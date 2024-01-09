import dbConn from "@/utils/dbConn";
import Restraunt from "@/models/Restraunt";
import { NextRequest, NextResponse } from "next/server";

//GET ALL
export async function GET() {
  try {
    await dbConn();

    const restraunts = await Restraunt.find();
    return NextResponse.json({
      message: "All Restraunts extracted sucessfully",
      restraunts,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 501 });
  }
}
