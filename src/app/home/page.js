import React from "react";
import { auth } from "@/auth";

const HomePage = async () => {

    const session = await.auth();

    if (!session?.user) 

  return <div>page</div>;
};

export default HomePage;
