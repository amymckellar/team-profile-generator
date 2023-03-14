const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "myteam.html");

const getDataReadyForOutput = require("./createTeamHTML.js");

const teamMembers = [];
// First message to the user
console.log(
  "Welcome to the Team! Please answer the following questions to build your team."
);

console.log("Welcome to the team!");
// create the questions for manager the user
function startTheApp() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",

          name: "Name",
          message: "What is the team manager's name?",
        },
        {
          type: "input",
          name: "Id",
          message: "What is the team manager's id?",
        },
        {
          type: "input",
          name: "Email",
          message: "What is the team manager's email?",
        },
        {
          type: "input",
          name: "OfficeNumber",
          message: "What is the team manager's office number?",
        },
      ])
      //  function to answer the questions
      .then((answers) => {
        const manager = new Manager(
          answers.Name,
          answers.Id,
          answers.Email,
          answers.OfficeNumber
        );

        teamMembers.push(manager);

        askMoreTeamQuestions();
      });
  }
  // create the questions for the user
  function askMoreTeamQuestions() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
          ],
        },
      ])
      // asks the user to pick which team member to create
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          default:
            buildTeam();
        }
      });
  }
  // create the questions for the engineer
  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "Name",
          message: "What is your engineer's name?",
        },
        {
          type: "input",
          name: "Id",
          message: "What is your engineer's id?",
        },
        {
          type: "input",
          name: "Email",
          message: "What is your engineer's email?",
        },
        {
          type: "input",
          name: "Github",
          message: "What is your engineer's Github?",
        },
      ])
      // function to answer the questions
      .then((answers) => {
        const engineer = new Engineer(
          answers.Name,
          answers.Id,
          answers.Email,
          answers.Github
        );
        teamMembers.push(engineer);

        askMoreTeamQuestions();
      });
  }
  // create the questions for the intern
  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "Name",
          message: "What is your intern's name?",
        },
        {
          type: "input",
          name: "Id",
          message: "What is your intern's id?",
        },
        {
          type: "input",
          name: "Email",
          message: "What is your intern's email?",
        },
        {
          type: "input",
          name: "School",
          message: "What is your intern's school?",
        },
      ])
      // function to answer the questions
      .then((answers) => {
        const intern = new Intern(
          answers.Name,
          answers.Id,
          answers.Email,
          answers.School
        );
        teamMembers.push(intern);

        askMoreTeamQuestions();
      });
  }
  // this will create the file
  function buildTeam() {
    fs.writeFileSync(outputPath, getDataReadyForOutput(teamMembers), "utf-8");
  }
  // this function is used to create one manager
  createManager();
}
// this starts the app
startTheApp();
