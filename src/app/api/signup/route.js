import dbConnect from "@/utils/dbConn";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcryptjs from "bcryptjs";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email, password, ...other } = reqBody;
    await dbConnect();

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          error: "User already exist",
        },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      ...other,
    });

    const savedUser = await newUser.save();

    console.log(savedUser);

    return NextResponse.json(
      {
        message: "user created successfully",
      },
      {
        status: 200,
      }
    );
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
