import dbConn from "@/utils/dbConn";
import Hotel from "@/models/Hotels";
import Room from "@/models/Room";
import { NextRequest, NextResponse } from "next/server";
import { checkAdmin } from "@/app/helpers/checkAdmin";

//DELETE ROOM AND UPDATE HOTEL
export async function DELETE(req, { params }) {
  try {
    const { hotelId, roomId } = params;
    await dbConn();

    const adminCheckResult = checkAdmin(req);

    if (adminCheckResult) {
      return adminCheckResult;
    }

    await Room.findByIdAndDelete(roomId);

    await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { rooms: roomId },
    });

    return NextResponse.json({
      message: "Room deleted and Hotel updated successfully",
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
