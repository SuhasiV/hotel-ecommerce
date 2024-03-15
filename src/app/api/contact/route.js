// import Contact from "@/models/Contact";
import Contact from "@/models/Contact";
import dbConn from "@/utils/dbConn";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const referer = req.headers.get("Referer");
    const body = await req.json();
    await dbConn();

    await Contact.create(body);

    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
