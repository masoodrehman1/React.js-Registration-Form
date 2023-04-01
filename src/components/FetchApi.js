export const FetchApi =  {
 getUsers:()=>{return(
  fetch("http://localhost:8080/usersApi")
  .then(response=>response.json())
  .then(data=>data) 
)} ,

postUsers: (postData)=>{
  fetch("http://localhost:8080/usersApi",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(postData)
  })
}
    }


