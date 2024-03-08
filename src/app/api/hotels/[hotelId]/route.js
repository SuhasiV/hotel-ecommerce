import dbConn from "@/utils/dbConn";
import Hotel from "@/models/Hotels";
import Room from "@/models/Room";
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

//CREATE ROOM AND UPDATE IN HOTEL

export async function POST(req, { params }) {
  const { hotelId } = params;

  try {
    const body = await req.json();
    body.hotelId = hotelId;
    await dbConn();

    const newRoom = await Room.create(body);

    const updatedHotel = await Hotel.findByIdAndUpdate(
      hotelId,
      {
        $push: { rooms: newRoom._id },
      },
      { new: true }
    );

    return NextResponse.json({
      message: "Room created and hotel updated successfully",
      success: true,
      newRoom,
      updatedHotel,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
