import dbConnect from "@/utils/dbConn";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcryptjs from "bcryptjs";
import { BorderStyle } from "@mui/icons-material";

// export async function POST(req) {
//   try {
//     const reqBody = await req.json();
//     const { email, name, ...other } = reqBody;
//     await dbConnect();

//     const user = await User.findOne({ email });

//     if (user) {
//       return NextResponse.json(
//         {
//           error: "User already exist",
//         },
//         { status: 400 }
//       );
//     }

//     //hash password
//     const salt = await bcryptjs.genSalt(10);
//     const hashedPassword = await bcryptjs.hash(password, salt);

//     const newUser = new User({
//       email,
//       password: hashedPassword,
//       ...other,
//     });

//     const savedUser = await newUser.save();

//     return NextResponse.json(
//       {
//         message: "user created successfully",
//       },
//       {
//         status: 200,
//       }
//     );
//   } catch (err) {
//     return NextResponse.json(
//       {
//         error: err.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

//using nextauth

const checkEmailAndEncryptPassword = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (user) {
    return NextResponse.json(
      {
        error: "User already exist",
      },
      { status: 400 }
    );
  }

  // //  hash password
  // const salt = await bcryptjs.genSalt(10);
  // const hashedPassword = await bcryptjs.hash(password, salt);

  // const newUser = new User({
  //   email,
  //   password: hashedPassword,
  //   ...other,
  // });

  // const savedUser = await newUser.save();
  // return NextResponse.json(
  //   {
  //     message: "user created successfully",
  //   },
  //   {
  //     status: 200,
  //   }
  // );
};

export async function POST(request) {
  const body = await request.json();
  try {
    await dbConnect();

    const email = body.email;

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          error: "User already exist",
        },
        { status: 400 }
      );
    }

    if (body.password) {
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(body.password, salt);

      const newUser = new User({
        name: body.name,
        email: body.email,
        password: hashedPassword,
        signUpType: body.signUpType,
      });
      await newUser.save();
    } else {
      await User.create({
        name: body.name,
        email: body.email,
        password: null,
        signUpType: body.signUpType,
      });
    }

    return NextResponse.json(
      {
        message: "user created successfully through website",
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

// export async function POST(request) {
//   const { name, email, signUpType } = await request.json();
//   try {
//     await dbConnect();
//     await User.create({ username: name, email, signUpType, password: null });
//     return NextResponse.json({ message: "User Registered" }, { status: 201 });
//   } catch (err) {
//     return NextResponse.json(
//       {
//         error: err.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
