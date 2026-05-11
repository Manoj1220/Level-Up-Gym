"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteApplication(id: number) {
  try {
    await prisma.application.delete({
      where: { id },
    });
    revalidatePath("/admin");
  } catch (error) {
    console.error("Failed to delete application", error);
  }
}

export async function markAsContacted(id: number) {
  try {
    await prisma.application.update({
      where: { id },
      data: { status: "contacted" },
    });
    revalidatePath("/admin");
  } catch (error) {
    console.error("Failed to mark application as contacted", error);
  }
}
