class User {
    /**
     * 
     * @param {string} id 
     * @param {string} login 
     * @param {string} pass 
     */
    constructor(id, login, pass) {
        this.id = id;
        this.login = login;
        this.pass = pass;
    }

    createEmail() {
        return `${this.id}.${this.login}@host.com`
    }
}