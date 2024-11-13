import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.userSlice);

  return <div>Home {user.username}</div>;
}

export default Home;
