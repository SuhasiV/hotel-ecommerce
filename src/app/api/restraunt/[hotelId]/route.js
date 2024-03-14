import dbConn from "@/utils/dbConn";
import Hotel from "@/models/Hotels";
import Restraunt from "@/models/Restraunt";
import { NextRequest, NextResponse } from "next/server";
import { checkAdmin } from "@/app/helpers/checkAdmin";

//CREATE Restraunt AND UPDATE IN HOTEL

export async function POST(req, { params }) {
  const { hotelId } = params;

  try {
    const body = await req.json();
    body.hotelId = hotelId;
    await dbConn();

    const newRest = await Restraunt.create(body);

    const updatedHotel = await Hotel.findByIdAndUpdate(
      hotelId,
      {
        $set: { "facilities.restId": newRest._id }, // Use $set to update the restId object
      },
      { new: true }
    );

    return NextResponse.json({
      message: "Rest created and hotel updated successfully",
      success: true,
      newRest,
      updatedHotel,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//DELETE ROOM AND UPDATE HOTEL
export async function DELETE(req, { params }) {
  const { hotelId } = params;
  const restrauntId = await req.nextUrl.searchParams.get("id");
  try {
    await dbConn();

    const adminCheckResult = checkAdmin(req);

    if (adminCheckResult) {
      return adminCheckResult;
    }

    await Restraunt.findByIdAndDelete(restrauntId);

    await Hotel.findByIdAndUpdate(hotelId, {
      $unset: { "facilities.restId": null }, // Use $unset to delete the restId field
    });

    return NextResponse.json({
      message: "Restraunt deleted and Hotel updated successfully",
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
