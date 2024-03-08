import dbConn from "@/utils/dbConn";
import Hotels from "@/models/Hotels";
import { NextRequest, NextResponse } from "next/server";
import { checkAdmin } from "@/app/helpers/checkAdmin";

//CREATE HOTELS
export async function POST(req) {
  try {
    const body = await req.json();
    await dbConn();

    const adminCheckResult = checkAdmin(req); //check if there is some return other than null

    if (adminCheckResult) {
      return adminCheckResult; //return unauthorized response
    }

    const newHotel = await Hotels.create(body);

    return NextResponse.json({
      message: "Hotel created successfully",
      success: true,
      newHotel,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//GET ALL HOTELS
export async function GET() {
  try {
    await dbConn();

    const hotels = await Hotels.find();
    return NextResponse.json({
      message: "All hotels extracted sucessfully",
      hotels,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 501 });
  }
}

//DELETE
export async function DELETE(req) {
  try {
    const id = await req.nextUrl.searchParams.get("id");
    await dbConn();

    await Hotels.findByIdAndDelete(id);
    return NextResponse.json({
      message: "hotel deleted sucessfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }
}
