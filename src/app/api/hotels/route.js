import dbConn from "@/utils/dbConn";
import Hotels from "@/models/Hotels";
import { NextRequest, NextResponse } from "next/server";
import { checkAdmin } from "@/app/helpers/checkAdmin";

//CREATE HOTELS
export async function POST(req) {
  try {
    const body = await req.json();
    await dbConn();

    const adminCheckResult = checkAdmin(req); //check if there is some return other than null

    if (adminCheckResult) {
      return adminCheckResult; //return unauthorized response
    }

    const newHotel = await Hotels.create(body);

    return NextResponse.json({
      message: "Hotel created successfully",
      success: true,
      newHotel,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// //GET ALL HOTELS
// export async function GET() {
//   try {
//     await dbConn();
//     const hotels = await Hotels.find({});
//     return NextResponse.json({
//       message: "All hotels extracted sucessfully",
//       hotels,
//       searchParams,
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 501 });
//   }
// }

// GET ALL HOTELS

// Function to build the query object based on the destination
function buildQuery(dest, isFeatured, isNew, isPopular) {
  if (isFeatured) {
    return { "type.isFeatured": true };
  }

  if (isNew) {
    return { "type.isNew": true };
  }

  if (isPopular) {
    return { "type.isPopular": true };
  }

  if (dest) {
    return {
      $or: [
        { address: { $regex: dest, $options: "i" } }, // Case-insensitive search for dest in address field
        { city: { $regex: dest, $options: "i" } },
      ],
    };
  } else {
    return {}; // Return empty object if no destination provided
  }
}

export async function GET(req) {
  try {
    await dbConn();

    const dest = req.nextUrl.searchParams.get("dest");
    const isFeatured = req.nextUrl.searchParams.get("isFeatured");
    const isNew = req.nextUrl.searchParams.get("isNew");
    const isPopular = req.nextUrl.searchParams.get("isPopular");

    const query = buildQuery(dest, isFeatured, isNew, isPopular);

    // const hotels = await Hotels.find(
    //   dest
    //     ? {
    //         $or: [
    //           { address: { $regex: "jaipur", $options: "i" } }, // Case-insensitive search for "jaipur" in address field
    //           { city: { $regex: "jaipur", $options: "i" } }, // Case-insensitive search for "jaipur" in city field
    //         ],
    //       }
    //     : {}
    // );

    const hotels = await Hotels.find(query);

    return NextResponse.json({
      message: "Hotels extracted successfully",
      hotels,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 501 });
  }
}

// //DELETE
// export async function DELETE(req) {
//   try {
//     const adminCheckResult = checkAdmin(req); //check if there is some return other than null

//     if (adminCheckResult) {
//       return adminCheckResult; //return unauthorized response
//     }

//     const id = await req.nextUrl.searchParams.get("id");
//     await dbConn();

//     await Hotels.findByIdAndDelete(id);
//     return NextResponse.json({
//       message: "hotel deleted sucessfully",
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 502 });
//   }
// }

//DELETE ALL
export async function DELETE(req) {
  try {
    const adminCheckResult = checkAdmin(req); //check if there is some return other than null

    if (adminCheckResult) {
      return adminCheckResult; //return unauthorized response
    }
    await dbConn();

    await Hotels.deleteMany({});
    return NextResponse.json({
      message: "all hotel deleted sucessfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }
}
