export const User_details = `query MyQuery($email: String!) {
    user {
      email
      password
    }
  }`


  export const EmailData = `query MyQuery($email: String!) {
    user(where: {email: {_eq: $email}}) {
      email
     
    }
  }
  `
  export const LoginInfo = `query MyQuery($email: String!, $password: String!) {
    user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
      password
      email
    }
  }`