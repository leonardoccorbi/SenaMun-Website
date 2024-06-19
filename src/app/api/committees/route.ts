import connectCommittees from "@/utils/connectDbCommittees";
import Committees from "@/models/Committees";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectCommittees();

    const committees = await Committees.find();

    return new NextResponse(JSON.stringify(committees), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Erro ao obter comitês" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
