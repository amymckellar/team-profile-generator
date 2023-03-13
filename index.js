const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const getDataReadyForOutput = require("./createTeamHTML.js");

const teamMembers = [];
