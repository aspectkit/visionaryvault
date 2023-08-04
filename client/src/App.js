// import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// import Home from "./views/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import Gallery from "./views/Gallery/Gallery";

// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: "/graphql",
// });
// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });
// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <Navbar />
//         {/* <Home /> */}
//         {/* <Gallery /> */}
//         <Switch>
//           <Route path="/" element={Home } />
//           {/* WHAT DO WE WANT ON THE ARTIST */}
//           {/* <Route path="/artists" element={<Artist />} /> */}
//           <Route path="/gallery" element={<Gallery />} />
//           {/* <Route path="/about" element={<About />} /> */}
//           {/* <Route path="/support" element={<Support />} /> */}
//           {/* WHAT DO WE WANT THE ARTIST PAGE TO BE */}
//           {/* <Route path="/artistPage" element={<ArtistPage />} /> */}
//           {/* NEED TO IMPORT VIEW PROFILE!!!!!*/}
//         </Switch>
//         {/* <Footer /> */}
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
// import ArtistPage from "./views/ArtistPage/ArtistPage";
import Gallery from "./views/Gallery/Gallery";
import About from "./views/About/About";
import Support from "./views/Support/Support";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/artistPage" component={ArtistPage} /> */}
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} />
            <Route path="/support" component={Support} />
          </Switch>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;