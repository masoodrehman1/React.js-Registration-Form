const http = require("http");
const fs = require("fs");
const cors = require("cors");

const server = http.createServer((req, res) => {
  cors()(req, res, () => {
    if (req.method === "GET" && req.url === "/usersApi") {
      fs.readFile(`${__dirname}/usersData.json`, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("error occurs");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(data);
        }
      });
    } else if (req.method === "GET" && req.url.startsWith("/usersApi")) {
      const id = parseInt(req.url.split("/")[2]);
      fs.readFile(`${__dirname}/usersData.json`, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("error occurs");
        } else {
          const users = JSON.parse(data);
          const userData = users.find((record) => record.id === id);
          if (userData) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(userData));
          } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("User not found");
          }
        }
      });
    } else if (req.method === "POST" && req.url === "/usersApi") {
      let data = "";
      req.on("data", (chunk) => {
        data += chunk;
      });
      req.on("end", () => {
        const newUserData = JSON.parse(data);
        fs.readFile(`${__dirname}/usersData.json`, "utf-8", (err, oldData) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("error occurs");
          } else {
            const oldUsers = JSON.parse(oldData);
            const newUserId = oldUsers[oldUsers.length - 1].id + 1;
            const newUser = {
              id: newUserId,
              ...newUserData,
            };
            const addNewUser = [...oldUsers, newUser];
            const addNewUserString = JSON.stringify(addNewUser);
            fs.writeFile(`${__dirname}/usersData.json`, addNewUserString, (err) => {
              if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("Internal Server Error");
              } else {
                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify(newUser));
              }
            });
          }
        });
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("Page not found");
    }
  });
});

server.listen(8080, "127.0.0.1", () => {
  console.log("Server is running on port 8080");
});