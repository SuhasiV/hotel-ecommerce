import dbConn from "@/utils/dbConn";
import Restraunt from "@/models/Restraunt";
import { NextRequest, NextResponse } from "next/server";
import { checkAdmin } from "@/app/helpers/checkAdmin";

//API NOT TESTED FOR RESTRAUNT....

//GET ALL Restraunt
export async function GET() {
  try {
    await dbConn();

    const restraunt = await Restraunt.find();
    return NextResponse.json({
      message: "All Restraunts extracted sucessfully",
      restraunt,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//UPDATE SINGLE Restraunt
export async function PUT(req) {
  try {
    const id = await req.nextUrl.searchParams.get("id");
    const body = await req.json();
    await dbConn();

    const adminCheckResult = checkAdmin(req);

    if (adminCheckResult) {
      return adminCheckResult;
    }

    await Restraunt.findByIdAndUpdate(id, body, {
      new: true,
    });
    return NextResponse.json({
      message: "Restraunt updated sucessfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
