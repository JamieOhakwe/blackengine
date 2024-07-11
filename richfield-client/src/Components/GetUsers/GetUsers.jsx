import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../../GraphQL/Queries";

const GetUsers = () => {
	const { data } = useQuery(LOAD_USERS);
	// const [users, setUsers] = useState([]);

	useEffect(() => {
		if (data) {
			console.log(data);
			// setUsers(data.getAllUsers);
		}
	}, [data]);

	return (
    // {loading && <p>Loading...</p>}
    //   {error && <p>Error: {error.message}</p>}
		<div>
			{data?.map(({ id, firstName }) => {
				return <div key={id}>{firstName}</div>;
			})}
		</div>
	);
};

export default GetUsers;
