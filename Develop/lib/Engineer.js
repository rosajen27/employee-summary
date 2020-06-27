// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(name, id, email, GitHub) {
        super(name, id, email);
        this.GitHub = GitHub;
    }

    //return github username
    getGitHub() {
        return this.GitHub;
    }

    //return engineer title
    getTitle () {
        return "Engineer";
    }
}

module.exports = Engineer;