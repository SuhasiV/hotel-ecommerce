import dbConn from "@/utils/dbConn";
import Hotels from "@/models/Hotels";
import { NextResponse } from "next/server";

// GET ALL HOTELS
export async function GET(req) {
  try {
    await dbConn();

    const dest = req.nextUrl.searchParams.get("dest");

    const hotels = await Hotels.find(
      dest
        ? {
            $or: [
              { address: { $regex: "jaipur", $options: "i" } }, // Case-insensitive search for "jaipur" in address field
              { city: { $regex: "jaipur", $options: "i" } }, // Case-insensitive search for "jaipur" in city field
            ],
          }
        : {}
    );

    return NextResponse.json({
      message: "Hotels extracted successfully",
      hotels,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 501 });
  }
}
