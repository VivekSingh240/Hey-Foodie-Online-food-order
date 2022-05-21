export  const InsertData = `mutation MyMutation($objects:[user_insert_input!]!) {
    insert_user(objects: $objects) {
      affected_rows
      returning {
        email
        password
        id
      }
    }
  }`

export const deletedata = `mutation MyMutation{
  delete_user(where: {}) {
    affected_rows
    returning {
      email
    }
  }
}
`
export const deleteOne = `mutation MyMutation($email: String!){
 delete_User(where: {email: {_eq: $email}}) {
  affected_rows
  returning {
    email
    password
  }
}
}`