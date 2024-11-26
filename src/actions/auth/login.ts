"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth.config";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // Simulate a get record from database
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await signIn("credentials", {
      ...Object.fromEntries(formData.entries()),
      redirect: false,
    });
    return "Success";
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "CredentialsSignin";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
