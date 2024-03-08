import { getDataFromToken } from "./getDataFromToken";

export const checkAdmin = (req) => {
  const { isAdmin } = getDataFromToken(req);

  if (!isAdmin) {
    return NextResponse.json(
      {
        message:
          "Unauthorized: You are not authorized to can create new hotels",
        success: false,
      },
      { status: 401 }
    );
  }

  // If user is admin, return null to indicate no issues
  return null;
};
