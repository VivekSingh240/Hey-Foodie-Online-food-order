import '../styles/globals.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: "https://grown-whippet-68.hasura.app/v1/graphql",
  headers:{
    "x-hasura-admin-secret":"ubHySLlO0kxRI3bS4WE62JzI7P0aLT5NIwVe7U6gDbWJlJNpfMjf0kTeT1NIGE11"
  }
})


 
function MyApp({ Component, pageProps }) {
  return (
<ClientContext.Provider value={client}>
  <Component {...pageProps} />
  </ClientContext.Provider>
  )
  
}

export default MyApp


