import { NextResponse, NextRequest } from "next/server";
import mongoose from 'mongoose'
import User from '../../../../models/user';
import connectMongo from '../../../../middleware/mongooseconnect';

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {

  const { userId } = params
  // console.log(params)
  const tocheck = mongoose.Types.ObjectId.isValid(userId)

  try {
    // console.log('CONNECTING TO MONGO');
    const connect = await connectMongo();

    if (connect) {
      // console.log('CONNECTED TO MONGO');
      if (tocheck === false) {
        var user = await User.findOne(
          { googleId: userId },
        )

      } else {
        var user = await User.findOne(
          { _id: userId }
        )

      }
      if (user) {
        return NextResponse.json({ user });
      } else {
        // Return an error response
        return NextResponse.json({ error: "User not found" }, { status: 500 });
      }
    }
    else {
      return NextResponse.error();
    }

  } catch (error) {
    return NextResponse.error();
  }
}
