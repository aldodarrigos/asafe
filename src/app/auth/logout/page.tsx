"use server";
import { signOut } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function LogoutPage(){
    try {
        await signOut();
        return redirect('/auth/login');
    } catch (error) {
        console.error('Error during logout:', error);
        return redirect('/auth/login');
    }
}