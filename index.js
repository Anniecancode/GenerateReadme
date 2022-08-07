// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const markDown = require('./utils/generateMarkdown.js')


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description'
    },
    {
        type: 'list',
        message: 'Please choose a license for your project',
        name: 'license',
        choices: ['BSD', 'MIT', 'GPL', 'None'], 
    },
    {
        type: 'input',
        message: 'What command should be run to intall dependencies?',
        name: 'installation',
        default: 'npm i'
    },
    {
        type: 'input',
        message: 'What command should be run to run test?',
        name: 'test',
        default: 'npm test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using this repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing this repo?',
        name: 'contribution'
    },
];


// Create a function to initialize app
const init = () => {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const readMeContent = markDown(answers);
      // Create a function to write README file
      fs.writeFile('readme.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
      )
    })
}


// Function call to initialize app
init();
