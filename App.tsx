import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { theme } from "./constants/theme";

const client = new ApolloClient({
  uri: "localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <PaperProvider theme={theme}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </PaperProvider>
        </ApolloProvider>
      </SafeAreaProvider>
    );
  }
}
