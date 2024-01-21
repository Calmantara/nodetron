
// postgres class to represent 
// postgres connection through sequelize 
class Postgres{
    constructor(config){
        this.config = config
    }

    async connect(){
       
        const postgresDSN = `postgres://${this.config.username}:${this.config.password}@${this.config.host}:${this.config.port}/${this.config.database}`
        
    }

    async validateConfig(){
        // validate host
        if (this.config.host === undefined || 
            this.config.host === null || 
            this.config.host === ""){
            throw new Error("invalid database host config")
            return
        }
        // validate password
        if (this.config.password === undefined || 
            this.config.password === null || 
            this.config.password === ""){
            throw new Error("invalid database password config")
            return
        } 
    }
}