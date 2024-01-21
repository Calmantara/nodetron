class UserRouter {
    constructor(app){
        this.app = app
    }

    mount(){
        this.app.route("/users")
            .get((req, res) => {
                res.send("get from users")
            })
            .post((req, res) => {
                res.send("post from users")
            })
            .put((req, res) => {
                res.send("put from users")
            })
    }
}

module.exports = UserRouter