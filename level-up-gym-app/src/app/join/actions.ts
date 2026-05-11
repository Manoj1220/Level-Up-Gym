"use server";

import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";
import { Application } from "@prisma/client";

export async function submitApplication(formData: FormData) {
  try {
    const fullName = formData.get("fullName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    if (!fullName || !phone) {
      return { success: false, error: "Name and Phone are required." };
    }

    // Save to database
    const application = await prisma.application.create({
      data: {
        name: fullName,
        phone,
        email: email || null,
      },
    });

    // Send email notification
    await sendNotificationEmail(application);

    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Failed to submit application." };
  }
}

async function sendNotificationEmail(application: Application) {
  try {
    // In production, configure with actual SMTP settings
    // For local dev, we will log or use Ethereal if configured
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || "test",
        pass: process.env.SMTP_PASS || "test",
      },
    });

    // Check if real SMTP is configured, otherwise skip sending or log
    if (!process.env.SMTP_HOST) {
      console.log("No SMTP configured. Email notification skipped for:", application);
      return;
    }

    const htmlContent = `
      <h2>New Gym Application</h2>
      <p><strong>Name:</strong> ${application.name}</p>
      <p><strong>Phone:</strong> ${application.phone}</p>
      <p><strong>Email:</strong> ${application.email || "N/A"}</p>
      <p><strong>Time:</strong> ${new Date(application.createdAt).toLocaleString()}</p>
    `;

    await transporter.sendMail({
      from: '"Level Up Gym" <no-reply@levelupgym.com>',
      to: process.env.ADMIN_EMAIL || "admin@levelupgym.com",
      subject: "New Application - Level Up Gym",
      html: htmlContent,
    });

    if (application.email) {
      await transporter.sendMail({
        from: '"Level Up Gym" <no-reply@levelupgym.com>',
        to: application.email,
        subject: "Your application has been received - Level Up Gym",
        html: `<p>Hi ${application.name},</p><p>Your application has been received. We will contact you shortly.</p>`,
      });
    }
  } catch (error) {
    console.error("Email notification failed:", error);
  }
}
