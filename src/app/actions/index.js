'use server'

import { singIn } from "@/auth"
import { redirect } from "next/dist/server/api-utils";

export async function doSocialLogin(formData) {
  const action = formData.get("action");
  await.signIn(action, { redirect: "/home" });

  console.log(action);
}

export async function doLogout() {}
