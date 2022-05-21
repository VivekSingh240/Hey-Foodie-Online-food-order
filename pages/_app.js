import "../styles/globals.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { SessionProvider } from "next-auth/react"
const client = new GraphQLClient({
  url: "https://grown-whippet-68.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "ubHySLlO0kxRI3bS4WE62JzI7P0aLT5NIwVe7U6gDbWJlJNpfMjf0kTeT1NIGE11",
  },
});

function App({
  Component,
  pageProps: { session, ...pageProps },
})  {
  return (
    // <Provider session={pageProps.session}>
      <ClientContext.Provider value={client}>
       <SessionProvider session={session}>
        <Component {...pageProps} />
        </SessionProvider>
      </ClientContext.Provider>
    
  );
}

export default App;
