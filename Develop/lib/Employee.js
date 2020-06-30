// TODO: Write code to define and export the Employee class
class Employee {
    constructor(title, name, id, email){
        this.title = title;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //return the title/role of the employee
    getTitle(){
        return this.title;
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