const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const getDataReadyForOutput = require("./createTeamHTML.js");

const teamMembers = [];

console.log(
  "Welcome to the Team! Please answer the following questions to build your team."
);

console.log("Welcome to the team!");

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
      .then((answers) => {
        const manager = new Manager(
          //here are the answers to the manager questions
          answers.Name,
          answers.Id,
          answers.Email,
          answers.OfficeNumber
        );

        teamMembers.push(manager);

        askMoreTeamQuestions();
      });
  }

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

  function createEngineer() {
    //start inquirer questions for the second time with new questions and new answers
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
      .then((answers) => {
        const engineer = new Engineer(
          //here are the answers to the engineer questions
          answers.Name,
          answers.Id,
          answers.Email,
          answers.Github
        );
        teamMembers.push(engineer);

        askMoreTeamQuestions();
      });
  }

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
      .then((answers) => {
        //here are the answers to the intern questions
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

  function buildTeam() {
    fs.writeFileSync(outputPath, getDataReadyForOutput(teamMembers), "utf-8");
  }

  createManager();
}

startTheApp();
