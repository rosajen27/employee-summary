# Template Engine - Employee Summary

A Node CLI (command line application) that takes in information about employees and generates an HTML webpage that displays summaries for each person (software engineering team generator). The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of managers, engineers and interns. This CLI also passes all unit tests. 

When the user has completed building the team, the application will create an HTML file, team.html, in the output folder that displays a nicely formatted team roster based on the information provided by the user. 


## Deployment

Deployed Website: https://rosajen27.github.io/employee-summary/


![Employee Summary 1](./Assets/10-OOP-homework-demo-1.png)
![Employee Summary 2](./Assets/10-OOP-homework-demo-2.png)

## Built With

* HTML
* CSS
* Node.js


## Installation 

* Run app.js in Node in order to answer prompt questions. Other requirements include:
* `npm install`
* `npm install inquirer`
* `npm install fs`


## Usage

* This app may be used for organizing employees into a template.
* The generator begins with prompting how many employees are on the team.
* If there a 0 employees, then a console.log will return stating there are no employees.
* You will then be prompted with whether you want to get a summary on managers, engineers, or interns. 
* After making a selection, it will run through series of questions pertaining to the team member.
* Once the prompts finish, you will be given an alert that states success.


## Tests

* The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.
* 🎗 Remember, you can run the tests at any time with `npm run test`
```
  Employee.test.js 
  Engineer.test.js (PASSED)
  Intern.test.js (PASSED)
  Manager.test.js (PASSED)
app.js         // Runs the application
```


## Authors

  - **Jennifer Rosa**
    [Rosajen27](https://rosajen27.github.io/)


## License

![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)

This project is licensed under the MIT License.

Copyright (c) 2020 Jennifer Rosa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Acknowledgements

* Trilogy Education Services

