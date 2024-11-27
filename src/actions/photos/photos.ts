"use server";
import { PhotoResponse } from "@/interfaces";
// import { revalidatePath } from "next/cache";

export async function getPhotos(
  page: number = 1,
  limit: number = 10
): Promise<PhotoResponse> {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos", {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to get photos :(");
  }

  const photos = await response.json();
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    data: photos.slice(startIndex, endIndex),
    totalItems: photos.length,
    currentPage: page,
    totalPages: Math.ceil(photos.length / limit),
  };
}
