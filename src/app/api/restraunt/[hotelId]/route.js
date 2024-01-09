import dbConn from "@/utils/dbConn";
import Hotel from "@/models/Hotels";
import Restraunt from "@/models/Restraunt";
import { NextRequest, NextResponse } from "next/server";

//CREATE ROOM AND UPDATE IN HOTEL
export async function POST(req, { params }) {
  const { hotelId } = params;
  const reqBody = await req.json();
  await dbConn();

  try {
    const newRest = new Restraunt(reqBody);
    const savedRest = await newRest.save();

    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, {
        $push: { restId: savedRest._id },
      });
      return NextResponse.json(
        {
          message: "rest created successfully and also updated in hotel",
        },
        { updatedHotel }
      );
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
