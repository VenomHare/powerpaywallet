"use server";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../../../lib/auth";
import { prisma } from "@powerpaywallet/db/client";
import { CreateWalletTransferRequest } from "@powerpaywallet/schemas/client";

export const POST = async (req: NextRequest) => {

}
