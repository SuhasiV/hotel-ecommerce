import dbConn from "@/utils/dbConn";
import Hotel from "@/models/Hotels";
import { NextRequest, NextResponse } from "next/server";
//import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import { checkAdmin } from "@/app/helpers/checkAdmin";

//GET ONE HOTEL
export async function GET(req, { params }) {
  try {
    const { hotelId } = params;
    await dbConn();

    const adminCheckResult = checkAdmin(req);
    if (adminCheckResult) {
      return adminCheckResult;
    }

    const hotel = await Hotel.findOne({ _id: hotelId });

    return NextResponse.json({
      message: "Hotel extracted successfully",
      status: 200,
      hotel,
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

//DELETE HOTEL

export async function DELETE(req, { params }) {
  try {
    const { hotelId } = params;
    await dbConn();

    const adminCheckResult = checkAdmin(req);

    if (adminCheckResult) {
      return adminCheckResult;
    }

    await Hotel.findByIdAndDelete(hotelId);

    return NextResponse.json({
      message: "Hotel deleted successfully",
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

//UPDATE
export async function PUT(req, { params }) {
  try {
    const { hotelId } = params;
    const body = await req.json();
    await dbConn();

    const adminCheckResult = checkAdmin(req);

    if (adminCheckResult) {
      return adminCheckResult;
    }

    const newHotel = await Hotel.findByIdAndUpdate(hotelId, body, {
      new: true,
    });

    return NextResponse.json({ message: "Updated successfully", newHotel });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
