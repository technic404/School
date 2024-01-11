class Info {
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }
}

class Error extends Info { }

class Success extends Info { }

/**
 * 
 * @param {string} user
 * @param {string} pass
 */
function login(user, pass) {
    const database = {
        "admin": { pass: "admin" },
        "uczen": { pass: "zaq1@WSX" }
    }

    if(!(user in database)) return new Error(1, "No user found in database");

    const userData = database[user];

    if(userData !== pass) return new Error(2, "Wrong password");

    return new Success(1, "Successfully logged in!")
}