const Http = require("./http")
const load = require("./src/config/loader")

async function main(){
    // binding config
    const config = await load()
    
    // serve http server
    const httpServer = new Http()
    httpServer.serve()
}
main()