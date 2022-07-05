import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUser = () => axios.get("http://localhost:4000/users");

const RQuserspage = () => {
  const { isLoading, data, error, isError } = useQuery("users", fetchUser);

  if (isLoading) return <h2>Loading ...</h2>;

  if(isError) return <h2>{error.message}</h2>

  return (
    <>
      <h2>Users</h2>
      {data?.data.map((user) => {
        return <div key={user.name}>{user.name}</div>;
      })}
    </>
  );
};

export default RQuserspage;
