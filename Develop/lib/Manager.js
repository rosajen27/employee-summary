// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //return the manager title/role
    getTitle(){
        return "Manager";
    }

    //return office number
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;