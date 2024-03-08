import dbConn from "@/utils/dbConn";
import Hotel from "@/models/Hotels";
import Spa from "@/models/Spa";
import { NextRequest, NextResponse } from "next/server";
import { checkAdmin } from "@/app/helpers/checkAdmin";

//CREATE SPA AND UPDATE IN HOTEL

export async function POST(req, { params }) {
  const { hotelId } = params;

  try {
    const body = await req.json();
    body.hotelId = hotelId;
    await dbConn();

    const newSpa = await Spa.create(body);

    const updatedHotel = await Hotel.findByIdAndUpdate(
      hotelId,
      {
        $push: { "facilities.spa.spaId": newSpa._id },
      },
      { new: true }
    );

    return NextResponse.json({
      message: "Spa created and hotel updated successfully",
      success: true,
      newSpa,
      updatedHotel,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//DELETE ROOM AND UPDATE HOTEL
export async function DELETE(req, { params }) {
  const { hotelId } = params;
  const spaId = await req.nextUrl.searchParams.get("id");
  try {
    await dbConn();

    const adminCheckResult = checkAdmin(req);

    if (adminCheckResult) {
      return adminCheckResult;
    }

    await Spa.findByIdAndDelete(spaId);

    await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { "facilities.spa.spaId": spaId },
    });

    return NextResponse.json({
      message: "Spa deleted and Hotel updated successfully",
      status: 200,
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}
