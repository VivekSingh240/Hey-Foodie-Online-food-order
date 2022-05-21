import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  
  providers: [
    GoogleProvider({
    
        clientId: process.env.client_id,
        clientSecret: process.env.client_secret,
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
      }),

  ],
jwt:{
    encryption: true,
},
secret: process.env.client_secret,
callbacks:{
    async jwt(token, account){
        console.log('data',process.env.client_secret)
        if(account?.accessToken){
            token.accessToken = account.accessToken
        }
        return token
    },

redirect: async(url,_baseUrl)=>{
    if (url === '/profile'){
        return Promise.resolve('/')
    }
    return Promise.resolve('/')
}
}
})