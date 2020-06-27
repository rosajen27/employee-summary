// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //return the name of the employee
    getName(){
        return this.name;
    }

    //return the id of the employee
    getId(){
        return this.id;
    }

    //return the email of the employee
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;