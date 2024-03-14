import dbConn from "@/utils/dbConn";
import Spa from "@/models/Spa";
import { NextRequest, NextResponse } from "next/server";
import { checkAdmin } from "@/app/helpers/checkAdmin";

//GET ALL SPA
// export async function GET() {
//   try {
//     await dbConn();

//     const spa = await Spa.find();
//     return NextResponse.json({
//       message: "All Spas extracted sucessfully",
//       spa,
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

//GET SINGLE SPA
export async function GET(req) {
  try {
    const id = await req.nextUrl.searchParams.get("id");
    await dbConn();

    const spa = await Spa.findOne({ _id: id });
    return NextResponse.json({
      message: "Single spa extracted sucessfully",
      spa,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//UPDATE SINGLE SPA
export async function PUT(req) {
  try {
    const id = await req.nextUrl.searchParams.get("id");
    const body = await req.json();
    await dbConn();

    const adminCheckResult = checkAdmin(req);

    if (adminCheckResult) {
      return adminCheckResult;
    }

    await Spa.findByIdAndUpdate(id, body, {
      new: true,
    });
    return NextResponse.json({
      message: "Spa updated sucessfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
