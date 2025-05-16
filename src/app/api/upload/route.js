import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

// Không cần export const config nữa
// Next.js tự động xử lý formData với POST request

export async function POST(req) {
  const uploadDir = path.join(process.cwd(), "public/uploads");

  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }

  const formData = await req.formData();
  const file = formData.get("upload");

  if (!file) {
    return NextResponse.json(
      { uploaded: 0, error: { message: "No file uploaded" } },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = path.extname(file.name);
  const newFilename = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
  const savePath = path.join(uploadDir, newFilename);

  await fs.writeFile(savePath, buffer);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const fileUrl = `${baseUrl}/uploads/${newFilename}`;

  // CKEditor yêu cầu format như thế này
  return NextResponse.json({
    uploaded: 1,
    fileName: newFilename,
    url: fileUrl,
  });
}

export const runtime = "nodejs"; // Thêm runtime để đảm bảo chạy trên Node.js
