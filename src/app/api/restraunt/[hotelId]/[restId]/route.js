import dbConn from "@/utils/dbConn";
import Hotel from "@/models/Hotels";
import Restraunt from "@/models/Restraunt";
import { NextRequest, NextResponse } from "next/server";

// DELETE REST AND UPDATE IN HOTEL

export async function DELETE(req, { params }) {
  const { hotelId, restId } = params;
  await dbConn();

  try {
    await Restraunt.findByIdAndDelete(restId);

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { restId: restId },
      });
      return NextResponse.json({
        message: "Rest and hotel deleted successful",
      });
    } catch (err) {
      return NextResponse.json(
        {
          error: err.message,
        },
        { status: 501 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      {
        error: err.message,
      },
      { status: 500 }
    );
  }
}
