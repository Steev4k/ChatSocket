//const httpServer = createServer();

const io = require("socket.io")(3000, {
    cors: {
      origin: "*",
    }
  });

  io.on("connection", socket =>{
    console.log(socket.id);
    io.emit("finally_connected", "YEEEE");
  })

  console.log("Server Running");