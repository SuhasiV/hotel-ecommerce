import dbConn from "@/utils/dbConn";
import Room from "@/models/Room";
import { NextRequest, NextResponse } from "next/server";

//GET ONE
export async function GET(req, { params }) {
  try {
    const { id } = params;
    await dbConn();

    const room = await Room.findOne({ _id: id });

    return NextResponse.json({
      message: "One Room extracted sucessfully",
      room,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
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
    const { id } = params;
    const body = await req.json();
    await dbConn();

    const room = await Room.findByIdAndUpdate(id, body, { new: true });

    return NextResponse.json({
      message: "Room updated sucessfully",
      room,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
