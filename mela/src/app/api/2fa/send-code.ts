// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Essalatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allahu Ekber velilahi'lhamd
// La ilahe illallah, Allahu Ekber Allahu Ekber, ve lillahi'lhamd

// 2FA SMS code sender endpoint (POST)
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Placeholder for SMS provider
async function sendSms(phone: string, code: string) {
  // TODO: Integrate with Twilio or other SMS provider
  console.log(`Sending SMS to ${phone}: code ${code}`);
}

export async function POST(req: NextRequest) {
  const { userId, phone } = await req.json();
  if (!userId || !phone) {
    return NextResponse.json({ error: "Missing userId or phone" }, { status: 400 });
  }
  // Generate 6-digit code
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  // Store code and expiry in DB (or cache)
  await prisma.user.update({
    where: { id: userId },
    data: {
      twoFactorCode: code,
      twoFactorCodeExpires: new Date(Date.now() + 5 * 60 * 1000), // 5 min
      contact: phone,
    },
  });
  await sendSms(phone, code);
  return NextResponse.json({ ok: true });
}
