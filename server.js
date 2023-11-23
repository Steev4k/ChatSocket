const io = require("socket.io")(3000, {
    cors: {
      origin: "http://localhost:8083",
    }
  });

  io.on("connection", socket =>{
    console.log(socket.id);
  })

  console.log("Server Running");