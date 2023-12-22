import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export async function Post(req: NextRequest, res: NextResponse) {
  const form = req.json();
}
