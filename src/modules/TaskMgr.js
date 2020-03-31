//variable to hold remote url
const remoteURL = "http://localhost:44358/api";

export default {
    //   bring back tasks based on parameters
getAllTasks(){
  return fetch(`${remoteURL}/Tasks`).then(result => result.json());
},
getOneTask(id) {
  return fetch(`${remoteURL}/Tasks/${id}`).then(result => result.json());
},
// post new tasks tp the database

post(newTask) {
  return fetch(`${remoteURL}/Tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  }).then(data => data.json());
},
}