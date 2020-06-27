// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //return office number
    getofficeNumber() {
        return this.officeNumber;
    }

    //return "manager" title
    getTitle () {
        return "Manager"
    }
}

module.exports = Manager;