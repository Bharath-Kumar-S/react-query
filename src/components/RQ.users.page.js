import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const RQuserspage = () => {
  const [id, setId] = useState(1);

  const fetchUser = () =>
    axios.get(`http://localhost:4000/users/?id=${id}`);

  const { isLoading, data, error, isError, refetch, isFetching } = useQuery(
    "users",
    fetchUser,
    {
      // cacheTime: 1000 * 60 * 5, // by default 5 mins
      // staleTime: 30 * 1000 // by default 0 secs
      // refetchOnMount: false // by default true
      // refetchOnWindowFocus: true // by default true
      // refetchInterval: 2000 // by default false
      // refetchIntervalInBackground: true // by default false
      // enabled: false, // for refetch // for click refetch
    }
  );

  if (isLoading || isFetching) return <h2>Loading ...</h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h2>React Query Users</h2>
      <input onChange={e => setId(e.target.value)}/>
      <button onClick={refetch}>Fetch Users</button>
      {data?.data.map((user) => {
        return <div key={user.name}>{user.name}</div>;
      })}
    </>
  );
};

export default RQuserspage;
