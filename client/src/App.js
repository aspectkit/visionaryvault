import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ChakraProvider } from "@chakra-ui/react";

import NavBar from "./components/NavBar/NavBar";
import FeaturedArtist from "./views/Artist/FeaturedArtist/FeaturedArtist";
import ArtistPortfolio from './views/Artist/ArtistPortfolio/ArtistPortfolio';
import Gallery from "./views/Gallery/Gallery";
import About from "./views/About/About";
import Support from "./views/Support/Support";
import CommissionForm from "./components/CommissionForm/CommissionForm";

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
          <NavBar />
          <Switch>
            <Route exact path="/" component={FeaturedArtist} />
            <Route exact path="/featuredArtist" component={FeaturedArtist} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} />
            <Route path="/support" component={Support} />
            <Route path="/viewProfile" component={ArtistPortfolio } />
            <Route path="/commission" component={CommissionForm} />
          </Switch>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;