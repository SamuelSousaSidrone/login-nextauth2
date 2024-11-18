'use server'

import { signIn } from "@/app/auth"
import { redirect } from "next/navigation";

export async function doSocialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirect: "/home" });

  console.log(action);
}

export async function doLogout() {}
