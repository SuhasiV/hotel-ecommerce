import User from "@/models/User";
import dbConnect from "@/utils/dbConn";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;
    await dbConnect();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 400 }
      );
    }

    //check password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Password incorrect" },
        { status: 400 }
      );
    }

    //create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      isAdmin: user.isAdmin,
    };

    //create token
    const token = await jwt.sign(tokenData, process.env.JWT);

    const response = NextResponse.json({
      message: "Login successful",
      sucess: true,
    });

    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
