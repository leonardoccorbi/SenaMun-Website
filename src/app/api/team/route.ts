import connectTeam from "@/utils/connectDbTeam";
import Member from "@/models/Member";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectTeam();

    const team = await Member.find();
    console.log(team);

    return new NextResponse(JSON.stringify(team), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Erro ao obter time" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

export const POST = async (req: any) => {
  const formData = await req.json();

  const nome = formData.name;
  const cargo = formData.cargo;
  const role = formData.role;
  const file = formData.myFile;

  await connectTeam();

  const newMember = new Member({
    nome,
    cargo,
    role,
    image: file,
  });

  try {
    await newMember.save();

    return new NextResponse("teste", {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
