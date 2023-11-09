import { Server } from "socket.io";

const io = new Server({
    connectTimeout: 2000,
    cors: {
        origin: "http://localhost:5173"
    }
})

io.listen();

io.on("connection", (socket) => {
    console.log("hello");

    socket.on("disconnect", () => {
        console.log("User Disconnected")
    })
})