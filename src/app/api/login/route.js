import User from "@/models/User";
import dbConnect from "@/utils/dbConn";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    await dbConnect();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 401 }
      );
    }

    //check password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }
    //create token data
    const tokenData = {
      id: user._id,
      username: user.name,
      isAdmin: user.isAdmin,
    };

    //create token
    const token = jwt.sign(tokenData, process.env.JWT, {
      expiresIn: "10d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
