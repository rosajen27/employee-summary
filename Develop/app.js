const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

async function begin() {
    console.log("Employee Summary");
    let myTeam;
    let myTeamSize;

    await inquirer.prompt({
        type: "number",
        message: "How many employees are on your team?",
        name: "amountTeam"
    })
        .then((data) => {
            myTeamSize = data.amountTeam + 1;
        });

    if (myTeamSize === 0) {
        console.log("Error: There are 0 employees on your team.");
        return;
    }

    for (i = 1; i < myTeamSize; i++) {
        let name;
        let id;
        let title;
        let email;

        await inquirer.prompt([
            {
                type: "list",
                message: "Employee job title: ",
                name: "title",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            },
            {
                type: "input",
                message: "Employee name: ",
                name: "name"
            },
            {
                type: "input",
                message: "Employee ID: ",
                name: "id"
            },
            {
                type: "input",
                message: "Employee e-mail: ",
                name: "email"
            },
        ])
            .then((data) => {
                name = data.name;
                id = data.id;
                title = data.title;
                email = data.email;
            });

        switch (title) {
            case "Manager":
                await inquirer.prompt([{
                    type: "input",
                    message: "Manager Office Number: ",
                    name: "officeNumber"
                }])
                    .then((data) => {
                        const manager = new Manager(name, id, email, data.officeNumber);
                        empMember = fs.readFileSync("templates/manager.html");
                        myTeam = myTeam + "\n" + eval('`' + empMember + '`');
                    });
                break;
            case "Engineer":
                await inquirer.prompt([{
                    type: "input",
                    message: "GitHub Username: ",
                    name: "GitHub"
                }])
                    .then((data) => {
                        const engineer = new Engineer(name, id, email, data.GitHub);
                        empMember = fs.readFileSync("templates/engineer.html");
                        myTeam = myTeam + "\n" + eval('`' + empMember + '`');
                    });
                break;
            case "Intern":
                await inquirer.prompt([{
                    type: "input",
                    message: "Enrolled School: ",
                    name: "school"
                }])
                    .then((data) => {
                        const intern = new Intern(name, id, email, data.school);
                        empMember = fs.readFileSync("templates/intern.html");
                        myTeam = myTeam + "\n" + eval('`' + empMember + '`');
                    });
                break;
        }
    }

    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder.

    const myteam = fs.readFileSync("templates/main.html");
    myTeam = eval('`' + myTeam + '`');
    fs.writeFile("output/team.html", myTeam, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Success!");


    });
}
begin();