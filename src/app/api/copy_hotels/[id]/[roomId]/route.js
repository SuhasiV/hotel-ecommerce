import dbConn from "@/utils/dbConn";
import Room from "@/models/Room";
import Hotel from "@/models/Hotels";
import { NextRequest, NextResponse } from "next/server";

// DELETE ROOM AND UPDATE IN HOTEL

export async function DELETE(req, { params }) {
  const { id, roomId } = params;
  await dbConn();

  try {
    await Room.findByIdAndDelete(roomId);

    try {
      await Hotel.findByIdAndUpdate(id, {
        $pull: { rooms: roomId },
      });
      return NextResponse.json({
        message: "room and hotel deleted successful",
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
