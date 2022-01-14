// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ('fs');
const util = require("util");

const generateMarkdown = require('./util/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
    },
    {
        name: "description",
        type: "input",
        message: "What is the project about? Give a detailed description of your project.",
    },
    {
      name: "contents",
      type: "confirm",
      message: "Do you want a table of content?",
    },    
    {
      name: "installation",
      type: "input",
      message: "What does user need to install to run this project? (ie dependencies)?",
    },
    {
      name: "usage",
      type: "input",
      message: "How would a user use this project?",
    },
    {
      name: "lisense",
      type: "checkbox",
      message: "What lisenses are being used?",
      choices:["MIT","ISC","blah","blah"]
    },
    {
      name: "contribute",
      type: "input",
      message: "Who contributed to this project?",
    },
    {
      name: "tests",
      type: "input",
      message: "what commands are needed to test this app?",
    },
    {
      name: "questions",
      type: "input",
      message: "Do you have any questions, contacts?", //ask for email and user name
    }
    {
        name: "username",
        type: "input",
        message: "What is your Github username?",
    }
    {
        name: "email",
        type: "email",
        message: "Whag is your email address?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// Create a function to initialize app
function init() {}
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md", geratorMarkdown(data));
            console.log(data)
        });

// Function call to initialize app
init();