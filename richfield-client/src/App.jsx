import "./App.css";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from "@apollo/client";
// import {onError} from '@Apollo/client/link/error'
import GetUsers from "./Components/GetUsers/GetUsers";

const link = from([
	new HttpLink({uri: "http://localhost:6969/graphql"}),
  
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  
});

// const errorLink = onError(({graphqlErrors, })=>{
//   if(graphqlErrors){
//     graphqlErrors.map(({message, })=>{
//       alert(`Graphql error: ${message}`)
//     })
//   }
// })


function App() {	

	return 	 <ApolloProvider client={client}><GetUsers/> </ApolloProvider>
}

export default App;
