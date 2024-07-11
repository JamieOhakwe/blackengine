import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
	query {
		getAllUsers {
			email
			firstName
			lastName
			role
		}
	}
`;
export const CREATE_USERS = gql`
	mutation{
    createUser(firstName: "Jamie", lastName: "Ohakwe", email: "jay@o.com", password: "jayy"){
        firstName
        lastName
        email
    }
}
`;
