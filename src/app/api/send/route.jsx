import Email from "@/components/mail";
import { NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request) {
  const { email, name, message, subject } = await request.json();
  console.log(email, name, message, subject);

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "hoang41911@gmail.com",
    subject: subject,
    html: Email({ name, email, message }),
  });

  if (error) {
    console.log(error);
    return NextResponse.error(error);
  }

  return NextResponse.json({
    email,
    name,
    message,
  });
}
