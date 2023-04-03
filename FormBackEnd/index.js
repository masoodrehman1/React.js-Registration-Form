const http = require("http");
const fs = require("fs");
const cors = require("cors");
const express=require("express")
const app = express()

  app.use(cors())
   app.get( "/usersApi",(req,res)=>{fs.readFile(`${__dirname}/usersData.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(404).send("error occurs");
    } else {
      res.status(200).json(JSON.parse(data))
      ;
    }})
      
      });
    app.get("/usersApi/:id", (req, res) => {
      const id = parseInt(req.params.id);
    fs.readFile(`${__dirname}/usersData.json`, "utf-8", (err, data) => {
      if (err) {
        res.status(404).send("error occurs");
        
      } else {
        const users = JSON.parse(data);
        const userData = users.find((record) => record.id === id);
        if (userData) {
          res.status(200).json(userData);

        } else {
          res.status(404).send("User not found");
          
        }
      }
    });}
    )  
    app.post ( "/usersApi", (req, res)=>{ 
      let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      const newUserData = JSON.parse(data);
      fs.readFile(`${__dirname}/usersData.json`, "utf-8", (err, oldData) => {
        if (err) {
          res.status(404).send("error occurs");
         
        } else {
          const oldUsers = JSON.parse(oldData);
          const newUserId = oldUsers[oldUsers.length - 1].id + 1;
          const newUser = {
            id: newUserId,
            ...newUserData,
          };
          const addNewUser = [...oldUsers, newUser];
          
          fs.writeFile(`${__dirname}/usersData.json`, JSON.stringify(addNewUser), (err) => {
            if (err) {
              res.status(500).send("Internal Server Error");
             
            } else {
              res.status(201).json(newUser);
              
            }
          });
        }
      });
    });}) 
    app.put(("/usersApi/"), (req, res)=>{
      const id =parseInt(req.url.split("/")[2])
      let data="";
      req.on("data", (chunk)=>{
        data+=chunk
      })  
        
      
      req.on("end",()=>{
        const newUpdateData=JSON.parse(data)
        fs.readFile(`${__dirname}/usersData.json`,"utf-8" ,(err, dataToUpdate)=>{
          if(err){
            res.status(404).send("error occours")
           
          }else{
            const newDataToBeUpdate=JSON.parse(dataToUpdate)
            const userIndex = newDataToBeUpdate.findIndex((record) => record.id === id);
            if(userIndex === -1){
              res.status(404).send("user not found ")
              
            }else{
              newDataToBeUpdate[userIndex] = newUpdateData;
              
              fs.writeFile(`${__dirname}/usersData.json`,JSON.stringify(newDataToBeUpdate),(err)=>{
                if(err){
                  res.status(200).send("error occour")
                  
                }else{
                  res.status(200).json(newUpdateData)
                 
                }
              })
            }
          }
        })
      } )
    })
      
    app.use((req, res)=>{ res.status(404).send("Page not found");})
     
      
  
app.listen(8080, "127.0.0.1", () => {
  console.log("Server is running on port 8080");
});



app.delete(("/usersApi/"),(req, res)=>{
  let id= parseInt(req.url.split("/")[2])
fs.readFile(`${__dirname}/usersData.json`, "utf-8",(err, data)=>{
  if(err){
    res.status(404).send("Page not found")
  }else{
    const duser=JSON.parse(data)
    const deluser=duser.find(data=>data.id===id)
    if(deluser){
      const deleteuser=duser.filter(data=>data.id!==id)
    fs.writeFile(`${__dirname}/usersData.json`,JSON.stringify(deleteuser),(err)=>{
     if(err){ res.status(404).send("Page not found");}
     else{
        res.status(200).json(deleteuser);
       
      }
    }
    )
    }
    
  }
})})
  
