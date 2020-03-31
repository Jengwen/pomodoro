//create local host variable
const remoteURL = "http://localhost:44358/api";

export default {
    //   bring back users from database based on parameters
getAllUsers(){
  return fetch(`${remoteURL}/Users`).then(result => result.json());
},
//bring back one user from database
getOneUser() {
  return fetch(`${remoteURL}/Users/1`).then(result => result.json());
},
//post a new user to database

post(newUser) {
    return fetch(`${remoteURL}/Users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json());
  },
}