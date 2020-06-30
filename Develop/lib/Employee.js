// TODO: Write code to define and export the Employee class
class Employee {
    constructor(title, name, id, email) {
        this.title = title;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //return the title/role of the employee
    getTitle(){
        return title;
    }

    //return the name of the employee
    getName(){
        return name;
    }

    //return the id of the employee
    getId(){
        return id;
    }

    //return the email of the employee
    getEmail() {
        return email;
    }
}

module.exports = Employee;