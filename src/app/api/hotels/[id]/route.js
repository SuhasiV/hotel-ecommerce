import dbConn from "@/utils/dbConn";
import Hotel from "@/models/Hotels";
import { NextRequest, NextResponse } from "next/server";

//UPDATE
export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    await dbConn();

    await Hotel.findByIdAndUpdate(id, body);

    return NextResponse.json({
      message: "Hotel updated sucessfully",
      Hotel,
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

// DELETE
export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await dbConn();

    await Hotel.findByIdAndDelete(id);

    return NextResponse.json({
      message: "hotel deleted sucessfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }
}

//GET ONE
export async function GET(req, { params }) {
  try {
    const { id } = params;
    await dbConn();

    const hotel = await Hotel.findOne({ _id: id });

    return NextResponse.json({
      message: "One Hotel extracted sucessfully",
      hotel,
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
