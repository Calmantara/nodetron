const express = require("express")
const UserRouter = require("./src/router/user")

class Http{
    constructor(){
        this.port = 8080
        this.name = "elecnode"
    }    


    serve(){
        const app = express()
        
        // serve router
        const userRouter = new UserRouter(app)
        userRouter.mount()
        
        const server = app.listen(this.port, ()=> {
            console.log("app is running on port 8080")
        })
        process.on("SIGTERM", this.graceful(server))
        process.on("SIGINT", this.graceful(server))
    }


    graceful(server){
        return () => {
            server.close()
            console.log("shutting down server gracefully")
        }
    }
}


module.exports = Http