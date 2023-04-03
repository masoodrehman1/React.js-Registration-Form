export const FetchApi = {
  getUsers: () => {
    return fetch("http://localhost:8080/usersApi")
      .then(response => response.json())
      .then(data => data);
  },

  postUsers: (postData) => {
    return fetch("http://localhost:8080/usersApi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(data => data);
  },

  putUser: (id, putData) => {
    return fetch("http://localhost:8080/usersApi", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(putData)
    })
      .then(response => response.json())
      .then(data => data);
  },
  deleteuser:(id)=>{
    fetch(`http://localhost:8080/usersApi/${id}`,{
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })  .then(response => response.json())
    .then(data => data);
  }
};


    // deleteuser:(id)=>{
    //   fetch(`http://localhost:8080/usersApi/${id}`,{
    //     method:"DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })  .then(response => response.json())
    //   .then(data => data);
    // }
    